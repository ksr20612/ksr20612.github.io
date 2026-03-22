# {Component Name}

## Component Metadata

```json
{
  "name": "{Component Name}", // 컴포넌트 이름
  "compound": false, // 컴파운드 패턴 여부
  "superComponents": [], // 상위 컴포넌트 이름
  "subComponents": [], // 하위 컴포넌트 이름
  "relatedComponents": [], // 함께 조합해서 쓰면 좋은 컴포넌트 이름
  "alternativeComponents": [], // 대체/대안 관계의 컴포넌트 이름
  "tokens": [] // 사용되는 주요 디자인 토큰 키들
}
```

## Import Statement

- 정확한 import 방법과 사용 예시

## Component Interface

- TypeScript 인터페이스 정의
- Props별 상세 설명과 예시

## Accessibility

- 키보드 인터랙션 규칙 (예: Space/Enter 동작)
- ARIA 속성 가이드 (예: iconOnly일 때 aria-label 필수)

## Design & Tokens

- Variant 별 사용되는 색상/타이포/레이아웃 토큰 요약
- Size 별 높이, 패딩, 타이포 요약 (표나 리스트 형태)

## Composition & Patterns

- 이 컴포넌트를 ${relatedComponents}와(과) 어떻게 조합해서 사용하는지
- 어떤 상황에서 ${alternativeComponents}로 대체하는 것이 좋은지

## Usage Examples

- 기본 사용법부터 고급 사용법까지
- 실제 프로젝트에서 쓸 만한 완전한 예시

## Best Practices & Anti-patterns

- 올바른 사용법
- 피해야 할 사용법
