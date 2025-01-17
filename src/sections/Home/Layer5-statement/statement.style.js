import styled from "styled-components";


const BannerSectionWrapper = styled.section`
    .row {
        margin: 0px;
    }
    .left-col {
        padding-left: 0px;
        padding-right: 0px;
        flex: 0 0 51%;
        max-width: 51%;
    }
    .left {
        display: flex;
        height: 100%;
    }
    .left-child {
        position: relative;
        align-self: center;
    }
    .right-col {
        padding-left: 0px;
        padding-right: 0px;
        flex: 0 0 49%;
        max-width: 49%;
    }
    h2.statement {
        color: ${(props) => props.theme.white};
        margin-bottom: 1rem;
        font-size: clamp(12px, 20px + .8vw, 50px);
        line-height: clamp(14px, 22px + .8vw, 50px);
    }
    h3.statement {
        color: ${(props) => props.theme.secondaryLightColor};
        margin-left: 3.5rem;
        text-indent: -3.5rem;
        margin-bottom: 2rem;
        font-size: clamp(10px, 12px + .8vw, 50px);
        line-height: clamp(10px, 12px + .8vw, 50px);

        &:before {
            content: "";
            display: inline-block;
            width: 3rem;
            margin-right: 0.5rem;
            vertical-align: middle;
            border-bottom: 1px solid;
        }
    }
    h4.statement {
        font-weight: bold;
        display: flex; 
        color: rgba(255, 255, 255, 0.7);
    }
    .hero {
        margin: -2rem;
        vertical-align: middle;
        overflow: hidden;
        object-fit: cover;
        width: 1000px;
        position: absolute;
    }
    .section-title {
        padding: 3rem 8rem;
        background: #00b39f;
    }
    .svg-background {
        position: absolute;
        top: 0px;
        right: 0px;
        overflow: hidden;
        height: 20rem;
        width: 15rem;
        img {
            filter: brightness(1.3);
            transform: scale(2);
            transform-origin: 0rem 0rem;
        }
    }


    @media only screen and (max-width: 1440px) {
        .section-title {
            padding: 2rem 3rem;
        }
    }
    
    @media only screen and (max-width: 767px) {
        .hero {
        display: none;
        }
        .join-community {
            text-align: center;
        }
        .left-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }  
    @media only screen and (max-width: 576px) {
        .section-title {
        padding: 2rem 1rem;
        }
    }  
`;

export default BannerSectionWrapper;
