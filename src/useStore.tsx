import { useEffect, useState } from 'react';
import { Provider, Store, StoreClass, StoreInterface, StoreModel } from '@leocode/rxstores';
import { SubscriptionLike } from 'rxjs';

export function useStore<T extends Store>(
    storeImplementation: StoreClass<T>,
    context?: string,
): [StoreModel<T> | undefined, StoreInterface<T> | undefined] {
    const [data, setData] = useState<StoreModel<T>>();
    const [methods, setMethods] = useState<StoreInterface<T>>();
    const [subscription, setSubscription] = useState<SubscriptionLike>();

    async function bindToStore() {
        const store = await (context
            ? Provider.from(context).getStore(storeImplementation)
            : Provider.getStore(storeImplementation));
        setData(store.value);
        setMethods(store.methods);
        setSubscription(store.data$.subscribe(setData));
    }

    useEffect(() => {
        bindToStore();
        return () => subscription && subscription.unsubscribe();
    }, []);

    return [
        data,
        methods
    ];
}
