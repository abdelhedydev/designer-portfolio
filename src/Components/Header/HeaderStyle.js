import styled from 'styled-components';
import theme from '../../Styles';

const HeaderStyle = WrappedComponent => styled(WrappedComponent)`
  background:transparent;
  position: relative;
  min-height:220px;
  .header{
    &__logo{
      position:absolute;
      left:114px;
      top:20px;
    }
    &__point{
      position:absolute;
      top:20px;
      right:114px;
      font-size:66px;
      color:${theme.colors.red}
    }
  }
`;
export default HeaderStyle;
