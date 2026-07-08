# Classic 婚礼场地单行展示设计

## 目标

Classic 版本邀请函详情卡中的场地值“上海花园饭店 · 百花厅”始终在同一行展示。

## 设计

- 仅约束 `data-field="venue"` 的场地值，避免影响日期、详细地址和着装要求。
- 为该元素设置 `white-space: nowrap`，保留现有字号、栅格列宽和卡片尺寸。
- 不修改文案和 HTML 结构。

## 验收标准

- `classic.html` 中的场地文案保持“上海花园饭店 · 百花厅”。
- `styles.css` 对 `data-field="venue"` 设置不换行规则。
- 现有 Classic 静态测试全部通过，并新增针对该规则的回归断言。
