
import CountSelector from "../components/ui/CountSelector";

export default {
    title: 'CountSelector',
    component: CountSelector,
    argTypes: {
        onChange: { action: 'count changed'}
    },
    args: {
        initial: 3,
        min: 0,
        max: 5,
        step: 1,
    }
}