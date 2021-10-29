import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Input = styled.input`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 57px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  margin-top: 5px;
`;
export const Select = styled.select`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 57px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 57px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  margin-top: 5px;
  min-height: 200px;
  resize: none;
`;

export const FormWrapper = styled.form`
  position: absolute;
  width: auto;
  height: auto;
  background: #232323;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05),
    0 10px 50px rgba(0, 0, 0, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  z-index: 2;
`;
export const FormWrapperGlobal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 35, 35, 0.918051);
  mix-blend-mode: normal;
  //opacity: 0.89;
  backdrop-filter: blur(0.4645px);
  z-index: 1;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: ${props => (props.fullWidth ? '100%' : '49%')};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #f65261;
  mix-blend-mode: normal;
  opacity: ${props => (props.isOpacity ? '1' : '0.8')};
  padding-top: 18px;
`;

export const FormHeader = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
`;
export const CloseBut = styled.div`
  display: inline-block;
  background-image: url(https://existek-838c.kxcdn.com/wp-content/uploads/2019/06/close-button.svg); /* This will render the 'X' */
  width: 40px;
  height: 40px;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

export const ButList = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-left: 40%;
  padding-top: 20px;
`;
export const SupText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;
`;
