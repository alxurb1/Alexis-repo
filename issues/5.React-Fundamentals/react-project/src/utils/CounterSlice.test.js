import counterReducer, { increment, decrement, reset, incrementAsync } from "../components/CounterSlice";

describe('Testing redux with Jest', ()=>{
    test('testing initial state',()=>{
        const initialValue = {value:0};

        const reducer = counterReducer(undefined, {type:'unknown'});

        expect(reducer).toEqual(initialValue);
    });

    test('testing increment by 1',()=>{
        const previousState = {value:0};

        const increment_test = counterReducer(previousState, increment());

        expect(increment_test).toEqual({value:1});
        
    });

    test('testing decrement by 1',()=>{
        const previousState = {value:0};

        const decrement_test = counterReducer(previousState, decrement());

        expect(decrement_test).toEqual({value:-1});
    });

    test('testing reset should reset value 0',()=>{
        
        const previousState = {value:99};

        const reset_state = counterReducer(previousState, reset());

        expect(reset_state).toEqual({value:0});
    });

    test('should handle incrementAsync.fulfilled',()=>{
        const previousState = {value:5};

        const action = {
            type: 'counter/incrementAsync/fulfilled',
            payload: 1
        };

        const newState = counterReducer(previousState, action);

        expect(newState).toEqual({value:6});
    });
});
