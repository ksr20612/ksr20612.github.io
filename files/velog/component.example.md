# Button

## Component Metadata

```json
{
  "name": "Button",
  "compound": false,
  "superComponents": [],
  "subComponents": [],
  "relatedComponents": ["Dialog", "DialogAction", "BottomSheet", "BottomSheetAction"],
  "alternativeComponents": ["IconButton", "MenuButton"],
  "tokens": [
    "palette.brand.primary.main",
    "palette.brand.primary.press",
    "palette.brand.primary.disable",
    "palette.brand.secondary",
    "palette.brand.tertiary",
    "palette.grey.10",
    "palette.grey.50",
    "palette.grey.70",
    "palette.grey.100",
    "typography.b4M",
    "typography.b2M",
    "typography.c3M",
    "typography.h4B",
    "typography.h0B",
    "spacing.content"
  ]
}
```

## Import Statement

```typescript
import Button from '@dotss/ui/Button';
// 또는
import { Button } from '@dotss/ui';
```

## Component Interface

```typescript
export type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T> & {
  variant?: Extract<Variant, 'filled' | 'outlined' | 'text'>;
  color?: BrandColorKey;
  size?: Size;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  iconOnly?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
};
```

### Props 상세 설명

#### Polymorphic Props

- **`tag`** (optional, 기본값: `'button'`): 렌더링할 HTML 태그. `'button'` 또는 `'a'`만 사용 가능
  - `'button'`: 일반 버튼 액션에 사용
  - `'a'`: 네비게이션(링크)에 사용하며, `href` prop을 함께 제공해야 함

#### Variant & Color

- **`variant`** (optional, 기본값: `'filled'`): 버튼 스타일
  - `'filled'`: 배경색이 있는 버튼
  - `'outlined'`: 테두리만 있는 버튼
  - `'text'`: 텍스트만 있는 버튼
- **`color`** (optional, 기본값: `'primary'`): 브랜드 색상
  - `'primary'`: 메인 브랜드 색상 (#FFC800)
  - `'secondary'`: 보조 브랜드 색상 (#313135)
  - `'tertiary'`: 3차 브랜드 색상 (#7B7B84)

#### Size

- **`size`** (optional, 기본값: `'medium'`): 버튼 크기
  - `'xSmall'`: 최소 크기 (24px 높이)
  - `'small'`: 작은 크기 (32px 높이)
  - `'medium'`: 중간 크기 (40px 높이)
  - `'large'`: 큰 크기 (48px 높이)
  - `'xLarge'`: 매우 큰 크기 (56px 높이)
  - `'2xLarge'`: 최대 크기 (100px 높이)

#### Content

- **`children`** (optional): 버튼 텍스트 또는 내용
- **`startAdornment`** (optional): 시작 부분에 표시할 아이콘 또는 요소 (ReactNode)
- **`endAdornment`** (optional): 끝 부분에 표시할 아이콘 또는 요소 (ReactNode)
- **`iconOnly`** (optional): 아이콘만 표시할지 여부. `true`일 경우 `children`은 숨겨지고 아이콘만 표시됨

#### Layout

- **`fullWidth`** (optional): 버튼이 부모 요소의 전체 너비를 차지할지 여부
- **`rounded`** (optional, 기본값: `true`): 둥근 모서리 적용 여부

#### State & Events

- **`disabled`** (optional): 버튼 비활성화 여부
- **`onClick`** (optional): 클릭 이벤트 핸들러
- **`onKeyDown`** (optional): 키보드 이벤트 핸들러

#### Styling

- **`inlineCSS`** (optional): Emotion CSS 스타일 오버라이드

## Accessibility

### 키보드 인터랙션

- **`tag="button"`인 경우**:
  - `Space` 또는 `Enter` 키로 클릭 가능
  - 포커스 가능한 요소로 기본 동작
- **`tag="a"`인 경우**:
  - 브라우저 기본 링크 동작 (Enter 키로 활성화)
  - `href` prop이 필수

### ARIA 속성 가이드

- **`iconOnly` 사용 시**:
  - `aria-label` prop을 반드시 제공해야 함
  - 내부적으로 Icon 컴포넌트를 감지하여 자동으로 `aria-label`을 생성하려고 시도하지만, 명시적으로 제공하는 것이 권장됨
- **`disabled` prop 사용**:
  - 내부적으로 `aria-disabled` 속성을 사용하여 접근성 지원
  - `disabled={true}`일 때 클릭 및 키보드 이벤트가 차단됨

### 포커스 관리

- 기본 포커스 링이 적용됨
- 테마의 포커스 스타일을 따름

## Design & Tokens

### Variant 별 토큰

#### Filled (Primary)

- Background: `palette.brand.primary.main`
- Text Color: 대비되는 색상 (white 또는 grey.100)
- Hover/Press: `palette.brand.primary.press`
- Disabled: `palette.brand.primary.disable`

#### Filled (Secondary)

- Background: `palette.brand.secondary`
- Text Color: 대비되는 색상
- Hover/Press: `palette.grey.100`
- Disabled: `palette.grey.10`

#### Filled (Tertiary)

- Background: `palette.brand.tertiary`
- Text Color: 대비되는 색상
- Hover/Press: `palette.grey.70`
- Disabled: `palette.grey.10`

#### Outlined

- Border: `palette.grey.50`
- Background: `palette.grey.white`
- Text Color: 대비되는 색상
- Hover/Press: `palette.grey.10`
- Disabled: `palette.grey.30` (border), `palette.grey.10` (background)

#### Text (Primary)

- Background: `transparent`
- Text Color: 대비되는 색상
- Hover/Press: `palette.grey.10`

#### Text (Secondary)

- Background: `transparent`
- Text Color: `palette.grey.70`
- Hover/Press: `palette.grey.10`

### Size 별 레이아웃

| Size    | 높이  | Typography Token | Icon 크기 | Border Radius |
| ------- | ----- | ---------------- | --------- | ------------- |
| xSmall  | 24px  | `typography.c3M` | 16px      | 6px           |
| small   | 32px  | `typography.c3M` | 16px      | 6px           |
| medium  | 40px  | `typography.b4M` | 20px      | 8px           |
| large   | 48px  | `typography.b2M` | 24px      | 10px          |
| xLarge  | 56px  | `typography.h4B` | 24px      | 12px          |
| 2xLarge | 100px | `typography.h0B` | 48px      | 20px          |

## Composition & Patterns

### Button vs IconButton vs MenuButton

- **`Button`**: 텍스트 + 아이콘이 결합된 **일반 액션 버튼**에 적합
  - 예: "제출하기", "다음", "프로필 편집하기" 등
- **`IconButton`**: **텍스트 없이 아이콘만으로 의미가 충분한 액션**에 적합
  - 예: 검색, 닫기, 좋아요 토글 등
- **`MenuButton`**: 드롭다운/메뉴를 여는 트리거에 적합
  - 예: "더보기(…)" 버튼, 필터/정렬 옵션 열기 등

### Dialog/BottomSheet와의 조합

- **DialogAction / BottomSheetAction 내부에서 사용**:
  - Primary 액션: `variant="filled"`, `color="primary"` Button
  - Secondary 액션: `variant="text"` 또는 `variant="outlined"` Button
  - 예:

```tsx
<DialogAction>
  <Button variant="text" onClick={handleCancel}>
    취소
  </Button>
  <Button variant="filled" color="primary" onClick={handleConfirm}>
    확인
  </Button>
</DialogAction>
```

### Form Footer 패턴

- Form 하단 네비게이션 바에서 `fullWidth`와 함께 사용:

```tsx
<Flexbox tag="footer" flexDirection="column" gap={2} pt={3} pb={3} pl={4} pr={4}>
  <Button fullWidth size="xLarge" onClick={handleSubmit} disabled={!isValid || isPending}>
    제출하기
  </Button>
</Flexbox>
```

## Usage Examples

### 기본 사용법

```tsx
import Button from '@dotss/ui/Button';

// 가장 기본적인 버튼
<Button>클릭하세요</Button>

// Variant 변경
<Button variant="filled">Filled Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="text">Text Button</Button>

// Color 변경
<Button color="primary">Primary Button</Button>
<Button color="secondary">Secondary Button</Button>
<Button color="tertiary">Tertiary Button</Button>

// Size 변경
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### 아이콘과 함께 사용

```tsx
import Button from '@dotss/ui/Button';
import Icon from '@dotss/ui/Icon';

// 시작 부분에 아이콘
<Button startAdornment={<Icon name="PlusLine" />}>
  추가하기
</Button>

// 끝 부분에 아이콘
<Button endAdornment={<Icon name="ChevronRightLine" />}>
  다음
</Button>

// 양쪽에 아이콘
<Button
  startAdornment={<Icon name="PlusLine" />}
  endAdornment={<Icon name="ChevronRightLine" />}
>
  완료
</Button>

// 아이콘만 표시
<Button
  startAdornment={<Icon name="SearchLine" />}
  iconOnly
  aria-label="검색"
/>
```

### 전체 너비 버튼 (실제 프로덕트 예시)

```tsx
// 결제하기 버튼
<Button size="xLarge" fullWidth onClick={handleClick}>
  {`${Number(amount).toLocaleString()}원 결제하기`}
</Button>

// Form 제출 버튼
<Button
  fullWidth
  size="xLarge"
  onClick={handleSubmit}
  disabled={!isValid || isPending}
>
  지원하기
</Button>
```

### Dialog 내부 사용 (실제 프로덕트 예시)

```tsx
import { Button, Dialog, DialogAction, DialogContent, DialogText } from '@dotss/ui';

<Dialog open={isOpen} onClose={handleClose}>
  <DialogContent>
    <DialogText>이미 가입된 계정이 있어요.</DialogText>
  </DialogContent>
  <DialogAction>
    <Button size="large" onClick={handleClose}>
      확인
    </Button>
  </DialogAction>
</Dialog>;
```

### 커스텀 스타일링 (실제 프로덕트 예시)

{% raw %}
```tsx
import Button from '@dotss/ui/Button';
import Icon from '@dotss/ui/Icon';
import useTheme from '@dotss/ui/core/useTheme';

function CustomButton() {
  const { palette, spacing } = useTheme();

  return (
    <Button
      fullWidth
      startAdornment={<Icon name="ModifyLine" />}
      onClick={handleClick}
      inlineCSS={{
        backgroundColor: palette.background.primary,
        color: palette.grey['100'],
        '&:not([aria-disabled="true"]):hover, &:not([aria-disabled="true"]):active': {
          backgroundColor: palette.grey['10']
        }
      }}
    >
      프로필 편집하기
    </Button>
  );
}
```
{% endraw %}

### 비활성화 상태와 조건부 활성화

```tsx
<Button
  fullWidth
  size="xLarge"
  onClick={handleClick}
  disabled={isPending || !message || !isInfoChecked || !isAgreementChecked}
>
  지원하기
</Button>
```

### 링크로 사용 (Anchor Button)

```tsx
<Button tag="a" href="https://example.com" target="_blank" variant="text">
  외부 링크 열기
</Button>
```

## Best Practices & Anti-patterns

### ✅ 올바른 사용법

```tsx
// 1. 적절한 variant 선택
<Button variant="filled">주요 액션</Button>
<Button variant="outlined">보조 액션</Button>
<Button variant="text">텍스트 액션</Button>

// 2. 링크는 tag="a"와 href 함께 사용
<Button tag="a" href="/about">소개 페이지</Button>

// 3. 아이콘만 사용할 때는 aria-label 제공
<Button
  startAdornment={<Icon name="SearchLine" />}
  iconOnly
  aria-label="검색"
/>

// 4. 비활성화 상태 명확히 표시
<Button disabled={!isValid}>제출</Button>

// 5. 전체 너비가 필요한 경우에만 사용
<Button fullWidth>로그인</Button>

// 6. Dialog/BottomSheet 액션 영역에서 Primary/Secondary 구분
<DialogAction>
  <Button variant="text">취소</Button>
  <Button variant="filled" color="primary">확인</Button>
</DialogAction>
```

### ❌ 피해야 할 사용법


{% raw %}
```tsx
// 1. tag prop에 button, a 외의 값 사용 금지
<Button tag="div">❌ 잘못된 사용</Button>

// 2. 링크로 사용할 때 href 누락
<Button tag="a">❌ href 없이 링크 사용</Button>

// 3. iconOnly 사용 시 aria-label 누락
<Button
  startAdornment={<Icon name="SearchLine" />}
  iconOnly
  // ❌ aria-label 없음 - 접근성 문제
/>

// 4. 불필요한 fullWidth 사용
<Button fullWidth>❌ 작은 버튼에 fullWidth 사용</Button>

// 5. disabled 대신 CSS로 숨기기
<div style={{ pointerEvents: 'none' }}>
  <Button>❌ disabled prop 대신 CSS 사용</Button>
</div>
// ✅ 올바른 방법
<Button disabled>비활성화</Button>

// 6. 아이콘만 필요한데 Button 사용
<Button startAdornment={<Icon name="CloseLine" />} iconOnly>
  ❌ IconButton을 사용해야 함
</Button>
// ✅ 올바른 방법
<IconButton name="CloseLine" aria-label="닫기" />
```
{% endraw %}
