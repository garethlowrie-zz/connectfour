import Loader from './presentational';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

export default compose(
    withState('timer', 'setTimerId'),
    withState('on', 'setOn', false),
    withHandlers({
        toggleSwitch: ({ setOn, on }: any) => () =>
            setOn(!on)
    }),
    lifecycle({
        componentDidMount() {
            const { setTimerId, toggleSwitch } = this.props;
            setTimerId(setInterval(toggleSwitch, 1000));
        },
        componentWillUnmount() {
            clearInterval(this.props.timer);
        }
    })
)
(Loader);
