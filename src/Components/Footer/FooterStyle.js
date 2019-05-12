import styled from 'styled-components';

const FooterStyle = WrappedComponent => styled(WrappedComponent)`
  display:inline-flex;
  justify-content:space-between;
  width:100%;
  .icons{
    i:not(:last-child){
    margin-right:5px;
    }
  }
`;
export default FooterStyle;
