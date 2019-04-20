import {connect} from "react-redux";
import Counter from "./Counter.component";

function mapStateToProps(state) {
    return {
        countValue: state.counter,
    };
};

let increaseAction = {type: "increase"};
let decreaseAction = {type: "decrease"};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCount: () => {dispatch(increaseAction)},
        decreaseCount: () => {dispatch(decreaseAction)},
    };
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

