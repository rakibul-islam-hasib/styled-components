import React from 'react';
import styled from 'styled-components';

const Remember = () => {
    const MainContainer = styled.div`
        width: 100%;
       .box{ 
            display: flex;
            align-items: center;
            color: #737B86;
        }
        .main { 
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        span , a { 
            color : #F78719 ; 
            text-decoration: underline;
        }
    `
    return (
        <MainContainer>
            <div className="main">
                <div className='box'>
                    <div className="">
                        <input type="checkbox" />
                    </div>
                    <label>Remember me</label>
                </div>
                <div className="">
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div className="box">
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <label className=''>Agree to <span>Terms & Conditions</span></label>
                </div>
            </div>
        </MainContainer>
    );
};

export default Remember;