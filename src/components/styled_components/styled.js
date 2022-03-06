import styled from "styled-components";

export const Wrapper= styled.div`
    display:flex;
    flex-direction:column;
    margin-top:15px;
    
`


export const Button = styled.button`
  background-color: white;
  border: 1px solid blue;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  margin-right: 5px;
`;

export const Loader = styled.div`
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
  margin-top: 10% !important;
  margin:0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Input = styled.input`
  height: 30px;
  margin:0 auto;
  margin-bottom:5px !important;
  @media (max-width: 234px) {
    width:100%
  }
 
`;
export const Filter = styled.select`
  height: 30px;
  width:180px;
  margin:0 auto;
  @media (max-width: 234px) {
    width:100%
  }

`;

export const List = styled.ul`
  background-color:white;
  width:165px;
  margin:0 auto;
  list-style:none;
  border:1px solid gray;
  text-align:left;
  height:130px;
  overflow:auto;


`
export const List_Item = styled.li`

  border-bottom:1px solid black;
  padding:5px;


`