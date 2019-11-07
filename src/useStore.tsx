import { useEffect, useState } from 'react';
import { Provider, Store, StoreClass, StoreInterface, StoreModel } from '@leocode/rxstores';

export function useStore<T extends Store>(
    storeImplementation: StoreClass<T>,
    context?: string,
): [StoreModel<T>, StoreInterface<T>] {
    const store = context
        ? Provider.from(context).getStore(storeImplementation)
        : Provider.getStore(storeImplementation);

    const [data, setData] = useState<StoreModel<T>>(store.value);

    useEffect(() => {
        const subscription = store.data$.subscribe(setData);
        return () => subscription && subscription.unsubscribe();
    }, []);

    return [
        data,
        store.methods
    ];
}
