# {Token Group Name}

## Token Group Metadata

```json
{
  "name": "{Token Group Name}", // 토큰 그룹 이름 (예: "Brand Primary Colors")
  "category": "color", // color | typography | spacing | elevation
  "type": "semantic", // semantic | primitive | function
  "path": "palette.brand.primary", // 토큰 그룹의 기본 경로
  "theme": ["tictoccroc-parent", "tictoccroc-teacher"], // 적용되는 테마들 (optional)
  "usedInComponents": [] // 이 토큰 그룹을 사용하는 컴포넌트 이름들 (optional)
}
```

## Tokens

| Token Name | Path                          | Value     | Description               | Theme Variations (optional)           |
| ---------- | ----------------------------- | --------- | ------------------------- | ------------------------------------- |
| main       | `palette.brand.primary.main`  | `#FFC800` | Primary button background | parent: `#FFC800`, teacher: `#18C1E7` |
| press      | `palette.brand.primary.press` | `#F5B400` | Pressed state             | parent: `#F5B400`, teacher: `#17AFD9` |

## Usage Guidelines

- 이 토큰 그룹을 언제 사용해야 하는지 한두 줄로 설명
- 어떤 상황에서 사용하면 안 되는지 (optional)
- 대체 가능한 토큰 그룹이 있다면 언급 (optional)

## Related Token Groups

- `color.brand.secondary` - Secondary 색상 토큰 그룹
- `color.grey` - Grey scale 토큰 그룹
