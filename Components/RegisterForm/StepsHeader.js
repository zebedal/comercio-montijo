

const StepsHeader = ({active}) => {

    return (
        <div style={{margin:'0 auto', width: 'fit-content'}}>
            {/* <svg width="100%" viewBox="0 0 235 36" fill="none"  >
                <circle cx="18" cy="18" r="17.5" fill={active === 1 ? 'var(--green)' : ""}  stroke="#393939" />
                <path d="M19.544 10.2V27H18.32V11.304H14.216V10.2H19.544Z" fill={active === 1 ? 'white' : 'var(--text-color)'} />
                <circle cx="117" cy="18" r="17.5" fill={active === 2 ? 'var(--green)' : ""} stroke="#393939" />
                <path d="M123.528 25.896V27H111.984V26.136L119.088 19.08C120.016 18.152 120.64 17.36 120.96 16.704C121.296 16.032 121.464 15.344 121.464 14.64C121.464 13.568 121.096 12.728 120.36 12.12C119.64 11.512 118.592 11.208 117.216 11.208C116.16 11.208 115.232 11.368 114.432 11.688C113.648 12.008 112.968 12.496 112.392 13.152L111.528 12.384C112.168 11.648 112.976 11.08 113.952 10.68C114.944 10.28 116.064 10.08 117.312 10.08C118.96 10.08 120.272 10.48 121.248 11.28C122.224 12.08 122.712 13.16 122.712 14.52C122.712 15.384 122.52 16.208 122.136 16.992C121.752 17.776 121.032 18.688 119.976 19.728L113.784 25.896H123.528Z" fill={active === 2 ? 'white' : 'var(--text-color)'} />
                <circle cx="217" cy="18" r="17.5" fill={active === 3 ? 'var(--green)' : ""} stroke="black" />
                <path d="M217.432 17.52C219.288 17.568 220.696 18.024 221.656 18.888C222.632 19.736 223.12 20.864 223.12 22.272C223.12 23.216 222.896 24.056 222.448 24.792C222 25.512 221.328 26.08 220.432 26.496C219.552 26.912 218.488 27.12 217.24 27.12C216.024 27.12 214.88 26.92 213.808 26.52C212.736 26.104 211.904 25.552 211.312 24.864L211.936 23.928C212.48 24.536 213.216 25.032 214.144 25.416C215.088 25.8 216.12 25.992 217.24 25.992C218.728 25.992 219.872 25.664 220.672 25.008C221.472 24.336 221.872 23.424 221.872 22.272C221.872 21.104 221.464 20.192 220.648 19.536C219.832 18.88 218.608 18.552 216.976 18.552H215.92V17.664L220.888 11.304H211.936V10.2H222.472V11.064L217.432 17.52Z" fill={active === 3 ? 'white' : 'var(--text-color)'} />
                <line x1="40" y1="18.5" x2="95" y2="18.5" stroke="#393939" />
                <line x1="139" y1="18.5" x2="194" y2="18.5" stroke="#393939" />
            </svg> */}
            <svg width="100%" height="auto" viewBox="0 0 268 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20.5" cy="20.5" r="20" fill="#5A7D00" stroke="#393939"/>
<path d="M21.0873 15.3111V25.1111H19.2673V16.8371H17.1953V15.3111H21.0873Z" fill="white"/>
<circle cx="133.25" cy="20.5" r="20" fill="white" stroke="#393939"/>
<path d="M136.408 23.5711V25.1111H129.184V23.8931L133.076 20.1971C133.515 19.7771 133.809 19.4131 133.958 19.1051C134.117 18.7878 134.196 18.4751 134.196 18.1671C134.196 17.7098 134.042 17.3598 133.734 17.1171C133.426 16.8744 132.974 16.7531 132.376 16.7531C131.378 16.7531 130.612 17.0938 130.08 17.7751L128.806 16.7951C129.189 16.2818 129.702 15.8851 130.346 15.6051C131 15.3158 131.728 15.1711 132.53 15.1711C133.594 15.1711 134.444 15.4231 135.078 15.9271C135.713 16.4311 136.03 17.1171 136.03 17.9851C136.03 18.5171 135.918 19.0164 135.694 19.4831C135.47 19.9498 135.041 20.4818 134.406 21.0791L131.788 23.5711H136.408Z" fill="#393939"/>
<circle cx="247.139" cy="20.5" r="20" fill="white" stroke="black"/>
<path d="M247.371 19.3571C248.277 19.4691 248.967 19.7771 249.443 20.2811C249.919 20.7851 250.157 21.4151 250.157 22.1711C250.157 22.7404 250.013 23.2584 249.723 23.7251C249.434 24.1918 248.995 24.5651 248.407 24.8451C247.829 25.1158 247.119 25.2511 246.279 25.2511C245.579 25.2511 244.903 25.1531 244.249 24.9571C243.605 24.7518 243.055 24.4718 242.597 24.1171L243.381 22.7031C243.736 23.0018 244.165 23.2398 244.669 23.4171C245.183 23.5851 245.71 23.6691 246.251 23.6691C246.895 23.6691 247.399 23.5384 247.763 23.2771C248.137 23.0064 248.323 22.6424 248.323 22.1851C248.323 21.7278 248.146 21.3731 247.791 21.1211C247.446 20.8598 246.914 20.7291 246.195 20.7291H245.299V19.4831L247.525 16.8371H243.073V15.3111H249.751V16.5291L247.371 19.3571Z" fill="#393939"/>
<line x1="45.5556" y1="21.1389" x2="108.194" y2="21.1389" stroke="#949494"/>
<line x1="158.306" y1="21.1389" x2="220.944" y2="21.1389" stroke="#949494"/>
</svg>


        </div>
    )
}



export default StepsHeader