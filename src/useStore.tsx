import { useEffect, useState } from 'react';
import { Provider, StoreClass, StoreModel } from '@leocode/rxstores';
import { Store } from '@leocode/rxstores/lib/store';

export function useStore<T extends Store>(
    storeImplementation: StoreClass<T>,
    context?: string,
) {
    const [data, setData] = useState<StoreModel<T>>();
    const { data$, methods } = context
        ? Provider.from(context).getStore(storeImplementation) 
        : Provider.getStore(storeImplementation);

    useEffect(() => {
        const subscription = data$.subscribe(setData);
        return () => subscription.unsubscribe();
    }, []);

    return {
        data,
        methods
    };
}
