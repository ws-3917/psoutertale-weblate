import json
import polib


def flatten_and_deduplicate(values, seen):
    """
    递归展开列表并去重
    """
    flattened = []
    for value in values:
        if isinstance(value, list):
            flattened.extend(flatten_and_deduplicate(value, seen))
        else:
            value = value.strip()
            if value and value not in seen:
                seen.add(value)
                flattened.append(value)
    return flattened


def extract_and_deduplicate(source, target):
    """
    遍历 JSON 数据，去重并生成新的 JSON 格式
    """
    with open(source, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_json = {}

    for key, values in data.items():
        if not isinstance(values, list):
            continue  # 只处理列表类型的值

        seen = set()
        flattened_values = flatten_and_deduplicate(values, seen)

        for count, value in enumerate(flattened_values):
            new_key = f"{key}-{count}"
            new_json[new_key] = value

    with open(target, "w", encoding="utf-8") as f:
        json.dump(new_json, f, ensure_ascii=False, indent=4)


def json_to_new_json(input_file, output_file):
    """
    读取 JSON 文件，去重后写入新 JSON 文件
    """
    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_data = extract_and_deduplicate(data)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(new_data, f, ensure_ascii=False, indent=4)

    print(f"新 JSON 文件已保存至: {output_file}")


def load_translations(po_file):
    """
    读取 PO 文件并构建 msgid 到 msgstr 的映射
    """
    translations = {}
    po = polib.pofile(po_file)

    for entry in po:
        if entry.msgstr:
            translations[entry.msgid] = entry.msgstr

    return translations


def translate_json(input_json, translation_old_json, output_json):
    """
    读取 JSON 文件，匹配翻译并生成新 JSON 文件
    """
    with open(input_json, "r", encoding="utf-8") as f:
        data_source = json.load(f)
    with open(translation_old_json, "r", encoding="utf-8") as f:
        data_old = json.load(f)

    new_data = {key: data_old.get(key, "") for key, value in data_source.items()}

    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(new_data, f, ensure_ascii=False, indent=4)

    print(f"翻译后的 JSON 文件已保存至: {output_json}")


extract_and_deduplicate("original.json", "ru_RU.json")
translate_json("ru_RU.json", "en_US.json", "en_US.json")
translate_json("ru_RU.json", "zh_CN.json", "zh_CN.json")
