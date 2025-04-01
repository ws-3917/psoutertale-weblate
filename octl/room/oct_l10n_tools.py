import json
import polib


def extract_and_deduplicate(data):
    """
    遍历 JSON 数据，去重并生成新的 JSON 格式
    """
    new_json = {}
    index = 0

    for key, values in data.items():
        seen = set()
        count = 0

        for value in values:
            value = value.strip()
            if value and value not in seen:
                new_key = f"{index}-{key}-{count}"
                new_json[new_key] = value
                seen.add(value)
                count += 1

        if len(values) > 0:
            index += 1

    return new_json


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


def translate_json(input_json, po_file, output_json):
    """
    读取 JSON 文件，匹配翻译并生成新 JSON 文件
    """
    with open(input_json, "r", encoding="utf-8") as f:
        data = json.load(f)

    translations = load_translations(po_file)

    new_data = {key: translations.get(value, "") for key, value in data.items()}

    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(new_data, f, ensure_ascii=False, indent=4)

    print(f"翻译后的 JSON 文件已保存至: {output_json}")
