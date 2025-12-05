# Card Component Enhancements

## OurWorkCard Component

### Before

```jsx
<div className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card">
  <div className="flex flex-col gap-3">
    <div className={`${data?.backGrouund}`}>{data?.title}</div>
    <span>{data?.description}</span>
  </div>
</div>
```

### After

```jsx
<div className="card-hover-effect card-float group rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card transition-all duration-500 hover:shadow-2xl">
  <div className="flex flex-col gap-3">
    <div
      className={`${data?.backGrouund} transition-all duration-500 group-hover:scale-110 group-hover:text-lightBlue`}
    >
      {data?.title}
    </div>
    <span className="transition-colors duration-300 group-hover:text-primary">
      {data?.description}
    </span>
  </div>
</div>
```

## New Features

### 1. Card Hover Effect

- Lifts card up by 8px
- Scales to 102%
- Enhanced shadow

### 2. Card Float

- Continuous floating on hover
- Shadow changes with position

### 3. Group Hover

- Title scales to 110%
- Title color changes to lightBlue
- Description color changes to primary

### 4. Shimmer Effect

- Light passes over card on hover
- Subtle shine animation
