# React bindings for RxStores

## Installation

### npm
```
npm i @leocode/rxstores @leocode/rxstores-react
```

### Yarn
```
yarn add @leocode/rxstores @leocode/rxstores-react
```

## Usage

> Info: This README assumes that you already know how to use RxStores.

```typescript
// stores/some.store.ts

import { Store } from '@leocode/rxstores';

export interface SomeModel { name: string; }

export class SomeStore extends Store<SomeModel> {
  ...

  updateModel() { ... }
}
```

### React Hooks (function components only)

```typescript
// components/SomeComponent.tsx

import React from 'react';

import { useStore } from '@leocode/rxstores-react';

import { SomeStore } from '../stores/some.store';

const SomeComponent: React.FC = () => {
  const [data, methods] = useStore(SomeStore);

  return (
    <p>{data.name}</p>
    <button onClick={methods.updateModel}>Update</button>
  );
}
```

### HOC (both class and function components)

> This is not done yet.
