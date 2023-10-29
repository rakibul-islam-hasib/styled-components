import React, { useState } from 'react';
import styled from 'styled-components';
import img from './assets/img.png';
import Remember from '../Remember';

const App = () => {
  const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      height: auto;
    }
  `;

  const FormContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const LeftSide = styled.div`
    padding: 20px;
    border-radius: 8px;

    img {
      width: 80%;
      height: 450px;
    }

    @media (max-width: 768px) {
      order: -1;
    }
  `;

  const MainForm = styled.div`
    width: 100%;
  `;

  const StyledForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;


    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #555;
    }

    input {
      width: 100%;
      padding: 8px 13px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #1575A7;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .password { 
      position: relative;
      svg { 
        position: absolute;
        top: 40px;
        right: 10px;  
        cursor: pointer;
      }

    }
  `;

  const NoAccount = styled.div`
    margin-top: 20px;
    text-align: center;
    color: #555;
    a{ 
      color: #F78719;
      text-decoration: underline;
      font-weight: bold;
    }
  `

  const [isPasswordShown, setIsPasswordShown] = useState(false);



  return (
    <MainContainer>
      <FormContainer>
        <LeftSide>
          <img src={img} alt="" />
        </LeftSide>
        <MainForm>
          <StyledForm onSubmit={event => event.preventDefault()}>
            <h1>Login</h1>
            <label htmlFor="username">Login ID :</label>
            <input type="text" id="username" placeholder='Enter Login Id ' name="username" />

            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type={isPasswordShown ? "text" : "password"}
                placeholder='Enter Password' id="password" name="password"
              />
              {
                isPasswordShown ? <svg onClick={() => setIsPasswordShown(!isPasswordShown)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                  <path d="M 15 5 C 6.081703 5 0.32098813 14.21118 0.21679688 14.378906 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 24.938822 25 29.767326 15.678741 29.826172 15.564453 A 1 1 0 0 0 29.837891 15.544922 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.785156 14.380859 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 18.866 18.866 22 15 22 C 11.134 22 8 18.866 8 15 C 8 11.134 11.134 8 15 8 z M 15 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 18 A 3 3 0 0 0 18 15 A 3 3 0 0 0 15 12 z"></path>
                </svg> : <svg onClick={() => setIsPasswordShown(!isPasswordShown)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                  <path d="M 1.7070312 0.29296875 L 0.29296875 1.7070312 L 28.292969 29.707031 L 29.707031 28.292969 L 23.681641 22.267578 C 27.777456 19.49434 29.799165 15.616636 29.826172 15.564453 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 C 12.469857 5 10.199331 5.7501922 8.234375 6.8203125 L 1.7070312 0.29296875 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 16.571956 21.470043 18.012848 20.59375 19.179688 L 17.701172 16.287109 C 17.889655 15.897819 18 15.462846 18 15C 18 13.343 16.657 12 15 12 C 14.537154 12 14.102181 12.110345 13.712891 12.298828 L 10.820312 9.40625 C 11.987152 8.5299565 13.428044 8 15 8 z M 4.9511719 9.0761719 C 1.9791583 11.576125 0.27498083 14.287031 0.21875 14.376953 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 16.85 25 18.520531 24.673484 20.019531 24.146484 L 17.431641 21.556641 C 16.672641 21.838641 15.856 22 15 22 C 11.134 22 8 18.866 8 15 C 8 14.144 8.1613594 13.327359 8.4433594 12.568359 L 4.9511719 9.0761719 z"></path>
                </svg>
              }
            </div>
            <Remember />
            <button type="submit">Login</button>

            <NoAccount>
              <p>Don&apos;t have an account? <a href="#">Register Here</a></p>
            </NoAccount>
          </StyledForm>
        </MainForm>
      </FormContainer>
    </MainContainer>
  );
};

export default App;