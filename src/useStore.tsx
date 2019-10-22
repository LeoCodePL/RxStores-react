import { useEffect, useState } from 'react';
import { Provider, Store, StoreClass, StoreModel } from '@leocode/rxstores';

export function useStore<T extends Store>(
    storeImplementation: StoreClass<T>,
    context?: string,
) {
    const { data$, methods, value } = context
        ? Provider.from(context).getStore(storeImplementation) 
        : Provider.getStore(storeImplementation);

    const [data, setData] = useState<StoreModel<T>>(value);

    useEffect(() => {
        const subscription = data$.subscribe(setData);
        return () => subscription.unsubscribe();
    }, []);

    return {
        data,
        methods
    };
}
