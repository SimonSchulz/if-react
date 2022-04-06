import React from 'react';

const SvgLinks = () => {
    return (
        <div className="header_links">
            <AppStoreSvg/>
            <GooglePlaySvg/>
        </div>
    );
};
const AppStoreSvg = () => {
    return (
        <svg id="AppStore" >
            <path d="M110.135 0.00013H9.53468C9.16798 0.00013 8.80568 0.00013 8.43995 0.00212999C8.1338 0.00412999 7.83009 0.00993997 7.521 0.01483C6.84951 0.0227317 6.17961 0.081806 5.5171 0.191539C4.85552 0.303662 4.21467 0.515044 3.61622 0.818537C3.0185 1.1246 2.47234 1.52229 1.99757 1.99719C1.5203 2.47076 1.12246 3.01814 0.81935 3.61828C0.5154 4.21723 0.30464 4.85905 0.19435 5.52159C0.0830109 6.1833 0.0230984 6.85263 0.01515 7.52359C0.00587 7.83018 0.00489 8.1378 0 8.44444V31.5586C0.00489 31.8691 0.00587 32.1699 0.01515 32.4805C0.0231008 33.1514 0.0830134 33.8207 0.19435 34.4824C0.304336 35.1453 0.515108 35.7875 0.81935 36.3867C1.12233 36.9849 1.52022 37.5301 1.99757 38.001C2.47054 38.478 3.01705 38.876 3.61622 39.1797C4.21467 39.484 4.85545 39.6967 5.5171 39.8105C6.17972 39.9194 6.84956 39.9785 7.521 39.9873C7.83009 39.9941 8.1338 39.998 8.43995 39.998C8.80567 40 9.168 40 9.53468 40H110.135C110.494 40 110.859 40 111.219 39.998C111.523 39.998 111.836 39.9941 112.141 39.9873C112.811 39.9789 113.479 39.9198 114.141 39.8105C114.804 39.6959 115.448 39.4833 116.049 39.1797C116.647 38.8758 117.193 38.4779 117.666 38.001C118.142 37.5282 118.541 36.9835 118.848 36.3867C119.15 35.7871 119.358 35.145 119.467 34.4824C119.578 33.8207 119.64 33.1515 119.652 32.4805C119.656 32.1699 119.656 31.8691 119.656 31.5586C119.664 31.1953 119.664 30.834 119.664 30.4648V9.53623C119.664 9.17002 119.664 8.80674 119.656 8.44444C119.656 8.1378 119.656 7.83018 119.652 7.52355C119.64 6.85253 119.578 6.18335 119.467 5.52155C119.358 4.8594 119.149 4.21762 118.848 3.61824C118.23 2.41532 117.252 1.43615 116.049 0.818447C115.448 0.515696 114.804 0.304369 114.141 0.191449C113.48 0.0812325 112.811 0.0221377 112.141 0.01469C111.836 0.00980997 111.523 0.00394999 111.219 0.00199999C110.859 0 110.494 0 110.135 0V0.00013Z"
                  fill="#A6A6A6"/>
            <path d="M8.44481 39.125C8.14013 39.125 7.84281 39.1211 7.54052 39.1143C6.9143 39.1062 6.28954 39.0517 5.67138 38.9512C5.09497 38.852 4.53658 38.6673 4.01464 38.4033C3.49748 38.1416 3.02579 37.7983 2.61764 37.3867C2.20358 36.98 1.85885 36.5083 1.59713 35.9902C1.33252 35.4688 1.14939 34.9099 1.05413 34.333C0.95125 33.7132 0.89559 33.0864 0.887626 32.4581C0.881286 32.2472 0.872986 31.545 0.872986 31.545V8.44445C0.872986 8.44445 0.881826 7.75304 0.887676 7.54991C0.895302 6.92259 0.950638 6.29676 1.05321 5.67784C1.14864 5.09936 1.33191 4.53886 1.59667 4.01574C1.85743 3.49806 2.20024 3.02598 2.61181 2.6178C3.02291 2.20574 3.49611 1.86072 4.01415 1.59533C4.53489 1.33221 5.09222 1.14885 5.66747 1.05139C6.28766 0.949958 6.91459 0.895118 7.54298 0.887332L8.4453 0.875122H111.214L112.127 0.887822C112.75 0.895221 113.371 0.949572 113.985 1.05041C114.566 1.1491 115.13 1.33374 115.656 1.59826C116.694 2.13311 117.539 2.97928 118.071 4.01819C118.332 4.53769 118.512 5.09362 118.606 5.6671C118.71 6.2911 118.768 6.92185 118.78 7.55431C118.783 7.83751 118.783 8.14171 118.783 8.44445C118.791 8.81944 118.791 9.17637 118.791 9.53623V30.4649C118.791 30.8282 118.791 31.1827 118.783 31.5401C118.783 31.8653 118.783 32.1632 118.779 32.4698C118.768 33.0909 118.71 33.7104 118.608 34.3232C118.515 34.9043 118.333 35.4676 118.068 35.9932C117.805 36.5057 117.462 36.9733 117.053 37.3789C116.644 37.7927 116.172 38.138 115.653 38.4014C115.128 38.6674 114.566 38.8528 113.985 38.9512C113.367 39.0522 112.742 39.1067 112.116 39.1143C111.823 39.1211 111.517 39.125 111.219 39.125L110.135 39.127L8.44481 39.125Z"
                  fill="black"/>
            <path d="M24.7689 20.3007C24.7796 19.4661 25.0013 18.6477 25.4134 17.9217C25.8254 17.1958 26.4143 16.5858 27.1254 16.1486C26.6737 15.5035 26.0777 14.9725 25.3849 14.598C24.6921 14.2234 23.9215 14.0156 23.1343 13.991C21.455 13.8147 19.8271 14.9958 18.9714 14.9958C18.0991 14.9958 16.7816 14.0085 15.3629 14.0376C14.4452 14.0673 13.5509 14.3341 12.767 14.8122C11.9831 15.2903 11.3364 15.9632 10.89 16.7655C8.95595 20.114 10.3985 25.035 12.2511 27.7417C13.178 29.067 14.2613 30.5475 15.6788 30.495C17.0658 30.4375 17.5839 29.6105 19.2582 29.6105C20.9169 29.6105 21.403 30.495 22.8492 30.4616C24.3376 30.4374 25.2753 29.1304 26.1697 27.7924C26.8357 26.8481 27.3481 25.8044 27.6881 24.6999C26.8234 24.3342 26.0855 23.722 25.5664 22.9397C25.0472 22.1574 24.7699 21.2396 24.7689 20.3007Z"
                  fill="white"/>
            <path d="M22.0372 12.2111C22.8488 11.2369 23.2486 9.98468 23.1518 8.72046C21.9119 8.85068 20.7667 9.44323 19.9442 10.3801C19.542 10.8377 19.234 11.3702 19.0378 11.9469C18.8416 12.5237 18.7609 13.1335 18.8005 13.7414C19.4206 13.7478 20.0341 13.6134 20.5948 13.3483C21.1554 13.0832 21.6486 12.6944 22.0372 12.2111Z"
                  fill="white"/>
            <path d="M42.3022 27.1397H37.5688L36.4321 30.4962H34.4272L38.9106 18.0781H40.9937L45.4771 30.4962H43.438L42.3022 27.1397ZM38.0591 25.5909H41.8111L39.9615 20.1436H39.9097L38.0591 25.5909Z"
                  fill="white"/>
            <path d="M55.1597 25.9698C55.1597 28.7833 53.6538 30.5909 51.3814 30.5909C50.8057 30.621 50.2332 30.4884 49.7294 30.2083C49.2256 29.9282 48.8109 29.5118 48.5327 29.0069H48.4897V33.4913H46.6313V21.4425H48.4302V22.9483H48.4644C48.7553 22.4459 49.1771 22.0317 49.6847 21.7498C50.1923 21.468 50.7669 21.329 51.3472 21.3477C53.645 21.3477 55.1597 23.1642 55.1597 25.9698ZM53.2495 25.9698C53.2495 24.1368 52.3022 22.9317 50.8569 22.9317C49.437 22.9317 48.4819 24.1622 48.4819 25.9698C48.4819 27.7941 49.437 29.0157 50.8569 29.0157C52.3023 29.0157 53.2495 27.8194 53.2495 25.9698Z"
                  fill="white"/>
            <path d="M65.1245 25.9698C65.1245 28.7833 63.6187 30.5909 61.3462 30.5909C60.7706 30.621 60.1981 30.4884 59.6943 30.2083C59.1905 29.9282 58.7758 29.5118 58.4976 29.0069H58.4546V33.4913H56.5962V21.4425H58.395V22.9483H58.4292C58.7201 22.4459 59.1419 22.0317 59.6495 21.7498C60.1571 21.468 60.7317 21.329 61.312 21.3477C63.6099 21.3477 65.1245 23.1641 65.1245 25.9698ZM63.2144 25.9698C63.2144 24.1368 62.2671 22.9317 60.8218 22.9317C59.4019 22.9317 58.4468 24.1622 58.4468 25.9698C58.4468 27.7941 59.4019 29.0157 60.8218 29.0157C62.2671 29.0157 63.2144 27.8194 63.2144 25.9698H63.2144Z"
                  fill="white"/>
            <path d="M71.7104 27.0362C71.8481 28.2676 73.0444 29.0761 74.6792 29.0761C76.2456 29.0761 77.3726 28.2676 77.3726 27.1572C77.3726 26.1933 76.6929 25.6162 75.0835 25.2207L73.4741 24.833C71.1939 24.2822 70.1353 23.2158 70.1353 21.4853C70.1353 19.3428 72.0024 17.8711 74.6538 17.8711C77.2778 17.8711 79.0766 19.3428 79.1372 21.4853H77.2612C77.1489 20.2461 76.1245 19.498 74.6274 19.498C73.1303 19.498 72.1059 20.2549 72.1059 21.3564C72.1059 22.2344 72.7602 22.751 74.3608 23.1464L75.729 23.4824C78.2768 24.0849 79.3354 25.1084 79.3354 26.9247C79.3354 29.248 77.4848 30.703 74.5415 30.703C71.7876 30.703 69.9282 29.2822 69.8081 27.0361L71.7104 27.0362Z"
                  fill="white"/>
            <path d="M83.3462 19.2999V21.4425H85.0679V22.9142H83.3462V27.9054C83.3462 28.6808 83.6909 29.0421 84.4478 29.0421C84.6521 29.0385 84.8562 29.0242 85.0591 28.9991V30.462C84.7188 30.5256 84.373 30.5544 84.0269 30.5479C82.1939 30.5479 81.479 29.8594 81.479 28.1036V22.9142H80.1626V21.4425H81.479V19.2999H83.3462Z"
                  fill="white"/>
            <path d="M86.065 25.9699C86.065 23.1212 87.7427 21.3312 90.3589 21.3312C92.9839 21.3312 94.6539 23.1212 94.6539 25.9699C94.6539 28.8263 92.9927 30.6085 90.3589 30.6085C87.7261 30.6085 86.065 28.8263 86.065 25.9699ZM92.7603 25.9699C92.7603 24.0157 91.8648 22.8624 90.3589 22.8624C88.8531 22.8624 87.9585 24.0245 87.9585 25.9699C87.9585 27.9318 88.8531 29.0763 90.3589 29.0763C91.8648 29.0763 92.7603 27.9318 92.7603 25.9699H92.7603Z"
                  fill="white"/>
            <path d="M96.186 21.4425H97.9585V22.9835H98.0015C98.1214 22.5022 98.4034 22.0769 98.8 21.779C99.1966 21.4811 99.6836 21.3288 100.179 21.3478C100.393 21.347 100.607 21.3703 100.816 21.4171V23.1554C100.546 23.0728 100.264 23.0348 99.981 23.0431C99.711 23.0321 99.4418 23.0797 99.192 23.1826C98.9422 23.2855 98.7175 23.4413 98.5336 23.6391C98.3496 23.837 98.2106 24.0724 98.1262 24.3291C98.0418 24.5857 98.0139 24.8576 98.0444 25.1261V30.4963H96.186L96.186 21.4425Z"
                  fill="white"/>
            <path d="M109.384 27.837C109.134 29.4805 107.534 30.6084 105.486 30.6084C102.852 30.6084 101.217 28.8438 101.217 26.0128C101.217 23.173 102.861 21.3312 105.408 21.3312C107.913 21.3312 109.488 23.0519 109.488 25.7969V26.4337H103.093V26.546C103.064 26.8792 103.105 27.2148 103.216 27.5307C103.326 27.8465 103.502 28.1353 103.732 28.3778C103.963 28.6204 104.242 28.8111 104.552 28.9374C104.861 29.0637 105.195 29.1227 105.529 29.1104C105.968 29.1515 106.409 29.0498 106.785 28.8204C107.162 28.5909 107.455 28.246 107.62 27.837L109.384 27.837ZM103.102 25.1348H107.628C107.645 24.8353 107.6 24.5354 107.495 24.2542C107.39 23.973 107.229 23.7165 107.02 23.5007C106.812 23.285 106.561 23.1146 106.283 23.0004C106.006 22.8862 105.708 22.8306 105.408 22.837C105.105 22.8352 104.805 22.8934 104.525 23.0081C104.245 23.1228 103.99 23.2919 103.776 23.5055C103.562 23.7192 103.392 23.9731 103.276 24.2528C103.16 24.5324 103.101 24.8322 103.102 25.1349V25.1348Z"
                  fill="white"/>
            <path d="M37.8262 8.73114C38.2158 8.70318 38.6068 8.76204 38.9709 8.90347C39.335 9.0449 39.6632 9.26538 39.9318 9.549C40.2004 9.83262 40.4027 10.1723 40.5241 10.5436C40.6455 10.9148 40.683 11.3084 40.6338 11.6959C40.6338 13.6022 39.6036 14.6979 37.8262 14.6979H35.6709V8.73114H37.8262ZM36.5977 13.8541H37.7227C38.0011 13.8707 38.2797 13.8251 38.5382 13.7205C38.7968 13.6158 39.0287 13.4549 39.2172 13.2493C39.4057 13.0438 39.546 12.7988 39.6279 12.5322C39.7097 12.2655 39.7311 11.984 39.6905 11.7081C39.7282 11.4333 39.7046 11.1535 39.6215 10.8888C39.5384 10.6242 39.3977 10.3812 39.2097 10.1773C39.0216 9.97333 38.7908 9.81352 38.5337 9.70928C38.2766 9.60505 37.9997 9.55897 37.7227 9.57434H36.5977V13.8541Z"
                  fill="white"/>
            <path d="M41.6807 12.4444C41.6524 12.1485 41.6862 11.8499 41.7801 11.5678C41.8739 11.2858 42.0257 11.0264 42.2256 10.8065C42.4256 10.5865 42.6693 10.4107 42.9411 10.2904C43.213 10.1702 43.507 10.108 43.8042 10.108C44.1015 10.108 44.3955 10.1702 44.6673 10.2904C44.9392 10.4107 45.1829 10.5865 45.3828 10.8065C45.5828 11.0264 45.7345 11.2858 45.8284 11.5678C45.9222 11.8499 45.9561 12.1485 45.9278 12.4444C45.9566 12.7406 45.9232 13.0396 45.8296 13.3221C45.736 13.6046 45.5843 13.8644 45.3843 14.0848C45.1843 14.3052 44.9404 14.4814 44.6683 14.6019C44.3962 14.7224 44.1019 14.7847 43.8042 14.7847C43.5066 14.7847 43.2123 14.7224 42.9402 14.6019C42.668 14.4814 42.4241 14.3052 42.2241 14.0848C42.0242 13.8644 41.8725 13.6046 41.7789 13.3221C41.6853 13.0396 41.6519 12.7406 41.6807 12.4444ZM45.0137 12.4444C45.0137 11.4683 44.5752 10.8975 43.8057 10.8975C43.0332 10.8975 42.5987 11.4683 42.5987 12.4444C42.5987 13.4283 43.0333 13.9947 43.8057 13.9947C44.5752 13.9946 45.0137 13.4243 45.0137 12.4444H45.0137Z"
                  fill="white"/>
            <path d="M51.5732 14.6979H50.6514L49.7207 11.3815H49.6504L48.7236 14.6979H47.8105L46.5693 10.1949H47.4707L48.2773 13.631H48.3438L49.2695 10.1949H50.1221L51.0479 13.631H51.1182L51.9209 10.1949H52.8096L51.5732 14.6979Z"
                  fill="white"/>
            <path d="M53.8535 10.1949H54.709V10.9102H54.7754C54.8881 10.6533 55.0781 10.4379 55.3189 10.2941C55.5598 10.1503 55.8396 10.0852 56.1192 10.1079C56.3383 10.0915 56.5583 10.1245 56.7629 10.2046C56.9675 10.2847 57.1514 10.4098 57.3011 10.5707C57.4508 10.7315 57.5624 10.924 57.6276 11.1338C57.6928 11.3436 57.7099 11.5654 57.6778 11.7828V14.6979H56.7891V12.006C56.7891 11.2823 56.4746 10.9224 55.8174 10.9224C55.6686 10.9155 55.5201 10.9408 55.3821 10.9966C55.244 11.0525 55.1197 11.1375 55.0176 11.2459C54.9154 11.3543 54.8379 11.4835 54.7904 11.6246C54.7429 11.7657 54.7264 11.9155 54.7422 12.0636V14.6979H53.8535L53.8535 10.1949Z"
                  fill="white"/>
            <path d="M59.0938 8.43713H59.9824V14.6979H59.0938V8.43713Z" fill="white"/>
            <path d="M61.2178 12.4444C61.1895 12.1485 61.2234 11.8499 61.3172 11.5678C61.4111 11.2857 61.5629 11.0264 61.7628 10.8064C61.9628 10.5864 62.2065 10.4106 62.4784 10.2903C62.7503 10.17 63.0443 10.1079 63.3416 10.1079C63.6388 10.1079 63.9328 10.17 64.2047 10.2903C64.4766 10.4106 64.7203 10.5864 64.9203 10.8064C65.1202 11.0264 65.272 11.2857 65.3659 11.5678C65.4597 11.8499 65.4936 12.1485 65.4653 12.4444C65.4941 12.7407 65.4607 13.0396 65.367 13.3222C65.2734 13.6047 65.1217 13.8645 64.9217 14.0849C64.7217 14.3053 64.4778 14.4815 64.2057 14.602C63.9335 14.7225 63.6392 14.7848 63.3416 14.7848C63.0439 14.7848 62.7496 14.7225 62.4775 14.602C62.2053 14.4815 61.9614 14.3053 61.7614 14.0849C61.5614 13.8645 61.4097 13.6047 61.3161 13.3222C61.2225 13.0396 61.189 12.7407 61.2178 12.4444ZM64.5508 12.4444C64.5508 11.4683 64.1123 10.8975 63.3428 10.8975C62.5703 10.8975 62.1358 11.4683 62.1358 12.4444C62.1358 13.4283 62.5703 13.9947 63.3428 13.9947C64.1123 13.9947 64.5508 13.4244 64.5508 12.4444H64.5508Z"
                  fill="white"/>
            <path d="M66.4009 13.4244C66.4009 12.6138 67.0044 12.1465 68.0757 12.0801L69.2954 12.0098V11.6211C69.2954 11.1455 68.981 10.877 68.3735 10.877C67.8774 10.877 67.5337 11.0591 67.4351 11.3775H66.5747C66.6655 10.604 67.3931 10.1079 68.4146 10.1079C69.5435 10.1079 70.1802 10.6699 70.1802 11.6211V14.6979H69.3247V14.065H69.2544C69.1117 14.292 68.9113 14.4771 68.6737 14.6013C68.436 14.7255 68.1697 14.7844 67.9019 14.7721C67.7128 14.7917 67.5218 14.7716 67.341 14.7129C67.1602 14.6542 66.9938 14.5582 66.8524 14.4313C66.711 14.3043 66.5977 14.1491 66.52 13.9757C66.4422 13.8022 66.4016 13.6145 66.4009 13.4244ZM69.2954 13.0396V12.6631L68.1958 12.7335C67.5757 12.775 67.2944 12.9859 67.2944 13.3829C67.2944 13.7882 67.646 14.024 68.1294 14.024C68.2711 14.0383 68.4142 14.024 68.5502 13.982C68.6862 13.9399 68.8123 13.8708 68.9211 13.779C69.0299 13.6872 69.1191 13.5744 69.1834 13.4473C69.2477 13.3203 69.2858 13.1817 69.2954 13.0396Z"
                  fill="white"/>
            <path d="M71.3481 12.4445C71.3481 11.0216 72.0796 10.1203 73.2173 10.1203C73.4987 10.1073 73.778 10.1747 74.0225 10.3146C74.267 10.4545 74.4667 10.6611 74.5981 10.9103H74.6646V8.43713H75.5532V14.6979H74.7017V13.9865H74.6313C74.4897 14.234 74.2831 14.438 74.0339 14.5765C73.7846 14.715 73.5022 14.7826 73.2173 14.7721C72.0718 14.7722 71.3481 13.8708 71.3481 12.4445ZM72.2661 12.4445C72.2661 13.3996 72.7163 13.9743 73.4693 13.9743C74.2183 13.9743 74.6812 13.3913 74.6812 12.4484C74.6812 11.5099 74.2134 10.9186 73.4693 10.9186C72.7212 10.9186 72.2661 11.4972 72.2661 12.4445H72.2661Z"
                  fill="white"/>
            <path d="M79.23 12.4444C79.2017 12.1485 79.2356 11.8499 79.3294 11.5678C79.4232 11.2858 79.575 11.0264 79.7749 10.8065C79.9749 10.5865 80.2186 10.4107 80.4904 10.2904C80.7623 10.1702 81.0563 10.108 81.3535 10.108C81.6508 10.108 81.9448 10.1702 82.2167 10.2904C82.4885 10.4107 82.7322 10.5865 82.9321 10.8065C83.1321 11.0264 83.2838 11.2858 83.3777 11.5678C83.4715 11.8499 83.5054 12.1485 83.4771 12.4444C83.5059 12.7406 83.4725 13.0396 83.3789 13.3221C83.2853 13.6046 83.1336 13.8644 82.9336 14.0848C82.7336 14.3052 82.4897 14.4814 82.2176 14.6019C81.9455 14.7224 81.6512 14.7847 81.3535 14.7847C81.0559 14.7847 80.7616 14.7224 80.4895 14.6019C80.2173 14.4814 79.9734 14.3052 79.7735 14.0848C79.5735 13.8644 79.4218 13.6046 79.3282 13.3221C79.2346 13.0396 79.2012 12.7406 79.23 12.4444ZM82.563 12.4444C82.563 11.4683 82.1245 10.8975 81.355 10.8975C80.5826 10.8975 80.148 11.4683 80.148 12.4444C80.148 13.4283 80.5826 13.9947 81.355 13.9947C82.1245 13.9946 82.563 13.4243 82.563 12.4444Z"
                  fill="white"/>
            <path d="M84.6694 10.1949H85.5249V10.9102H85.5913C85.704 10.6533 85.894 10.4379 86.1349 10.2941C86.3757 10.1503 86.6555 10.0852 86.9351 10.1079C87.1542 10.0915 87.3742 10.1245 87.5788 10.2046C87.7834 10.2847 87.9673 10.4098 88.117 10.5707C88.2667 10.7315 88.3783 10.924 88.4435 11.1338C88.5087 11.3436 88.5258 11.5654 88.4937 11.7828V14.6979H87.605V12.006C87.605 11.2823 87.2906 10.9224 86.6333 10.9224C86.4846 10.9155 86.3361 10.9408 86.198 10.9966C86.0599 11.0525 85.9356 11.1375 85.8335 11.2459C85.7313 11.3543 85.6539 11.4835 85.6063 11.6246C85.5588 11.7657 85.5424 11.9155 85.5581 12.0636V14.6979H84.6694V10.1949Z"
                  fill="white"/>
            <path d="M93.5151 9.07385V10.2155H94.4907V10.964H93.5151V13.2794C93.5151 13.7511 93.7095 13.9576 94.1518 13.9576C94.2651 13.9573 94.3783 13.9504 94.4907 13.9371V14.6774C94.3311 14.7059 94.1694 14.7211 94.0073 14.7228C93.019 14.7228 92.6255 14.3751 92.6255 13.507V10.964H91.9106V10.2154H92.6255V9.07385H93.5151Z"
                  fill="white"/>
            <path d="M95.7046 8.43713H96.5855V10.9186H96.6558C96.7739 10.6593 96.9691 10.4427 97.2148 10.2983C97.4605 10.154 97.7447 10.0889 98.0288 10.1119C98.2467 10.1001 98.4646 10.1365 98.6669 10.2185C98.8692 10.3006 99.0509 10.4262 99.199 10.5866C99.3471 10.7469 99.458 10.938 99.5238 11.1461C99.5896 11.3542 99.6086 11.5743 99.5796 11.7907V14.6979H98.69V12.0099C98.69 11.2906 98.355 10.9264 97.7271 10.9264C97.5744 10.9139 97.4207 10.9349 97.277 10.9879C97.1332 11.041 97.0027 11.1248 96.8947 11.2335C96.7867 11.3423 96.7038 11.4733 96.6517 11.6174C96.5997 11.7616 96.5797 11.9153 96.5933 12.068V14.6979H95.7046L95.7046 8.43713Z"
                  fill="white"/>
            <path d="M104.761 13.4821C104.641 13.8936 104.379 14.2496 104.022 14.4878C103.666 14.7259 103.236 14.8311 102.81 14.7848C102.513 14.7926 102.219 14.7358 101.946 14.6183C101.674 14.5008 101.43 14.3253 101.232 14.1042C101.034 13.8831 100.887 13.6215 100.8 13.3377C100.713 13.0538 100.689 12.7545 100.73 12.4606C100.691 12.1657 100.715 11.8657 100.801 11.5811C100.888 11.2964 101.034 11.0336 101.231 10.8105C101.428 10.5875 101.671 10.4093 101.942 10.2881C102.214 10.1669 102.509 10.1054 102.806 10.108C104.059 10.108 104.815 10.964 104.815 12.378V12.6881H101.635V12.7379C101.621 12.9032 101.642 13.0695 101.696 13.2263C101.75 13.383 101.837 13.5267 101.95 13.6482C102.062 13.7696 102.2 13.8662 102.352 13.9316C102.504 13.997 102.669 14.0298 102.834 14.0279C103.047 14.0535 103.262 14.0152 103.453 13.918C103.644 13.8208 103.801 13.669 103.906 13.482L104.761 13.4821ZM101.635 12.0309H103.91C103.921 11.8797 103.9 11.7279 103.849 11.5852C103.798 11.4425 103.718 11.312 103.614 11.2022C103.509 11.0923 103.383 11.0055 103.243 10.9473C103.103 10.8891 102.953 10.8609 102.801 10.8643C102.648 10.8624 102.495 10.8913 102.353 10.9492C102.21 11.0072 102.081 11.093 101.972 11.2017C101.864 11.3105 101.778 11.4398 101.72 11.5822C101.662 11.7246 101.633 11.8772 101.635 12.0309H101.635Z"
                  fill="white"/>
        </svg>
    );
};
const GooglePlaySvg = () => {
    return (
        <svg id="google_play">
            <g filter="url(#filter0_d_1_42)">
                <path d="M134 39.9999H9C6.25 39.9999 4 37.75 4 35V4.99999C4 2.25 6.25 0 9 0H134C136.75 0 139 2.25 139 4.99999V35C139 37.75 136.75 39.9999 134 39.9999Z" fill="black"/>
                <path d="M134 0.799999C136.32 0.799999 138.2 2.68 138.2 4.99999V35C138.2 37.32 136.32 39.2 134 39.2H9C6.68 39.2 4.8 37.32 4.8 35V4.99999C4.8 2.68 6.68 0.799999 9 0.799999H134ZM134 0H9C6.25 0 4 2.25 4 4.99999V35C4 37.75 6.25 39.9999 9 39.9999H134C136.75 39.9999 139 37.75 139 35V4.99999C139 2.25 136.75 0 134 0Z" fill="#A6A6A6"/>
                <path d="M51.42 10.2399C51.42 11.0799 51.17 11.7499 50.67 12.2399C50.11 12.8299 49.37 13.1299 48.47 13.1299C47.6 13.1299 46.87 12.8299 46.26 12.2299C45.65 11.6299 45.35 10.8799 45.35 9.99991C45.35 9.1099 45.65 8.36989 46.26 7.76988C46.87 7.16988 47.6 6.86987 48.47 6.86987C48.9 6.86987 49.31 6.94987 49.7 7.11988C50.09 7.28988 50.4 7.50988 50.64 7.78988L50.11 8.31989C49.71 7.84988 49.17 7.60988 48.47 7.60988C47.84 7.60988 47.29 7.82988 46.83 8.27989C46.37 8.7199 46.14 9.2999 46.14 10.0099C46.14 10.7199 46.37 11.2999 46.83 11.7399C47.29 12.1799 47.84 12.4099 48.47 12.4099C49.14 12.4099 49.7 12.1899 50.15 11.7399C50.44 11.4499 50.61 11.0399 50.65 10.5199H48.47V9.79991H51.38C51.4 9.94991 51.42 10.0999 51.42 10.2399Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M56.03 7.73988H53.3V9.63988H55.76V10.3599H53.3V12.2599H56.03V12.9999H52.53V6.99988H56.03V7.73988Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M59.28 12.9999H58.51V7.73988H56.83V6.99988H60.95V7.73988H59.27V12.9999H59.28Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M63.94 12.9999V6.99988H64.71V12.9999H63.94Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M68.13 12.9999H67.36V7.73988H65.68V6.99988H69.8V7.73988H68.12V12.9999H68.13Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M77.61 12.2199C77.02 12.8299 76.29 13.1299 75.41 13.1299C74.53 13.1299 73.8 12.8299 73.21 12.2199C72.62 11.6099 72.33 10.8699 72.33 9.99991C72.33 9.1299 72.62 8.37989 73.21 7.77988C73.8 7.16988 74.53 6.86987 75.41 6.86987C76.28 6.86987 77.01 7.16988 77.61 7.77988C78.2 8.38989 78.5 9.1299 78.5 9.99991C78.49 10.8799 78.2 11.6199 77.61 12.2199ZM73.78 11.7199C74.22 12.1699 74.77 12.3899 75.41 12.3899C76.05 12.3899 76.6 12.1699 77.04 11.7199C77.48 11.2699 77.71 10.6999 77.71 9.99991C77.71 9.2999 77.49 8.7299 77.04 8.27989C76.6 7.82988 76.05 7.60988 75.41 7.60988C74.77 7.60988 74.22 7.82988 73.78 8.27989C73.34 8.7299 73.11 9.2999 73.11 9.99991C73.11 10.6999 73.34 11.2699 73.78 11.7199Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M79.58 12.9999V6.99988H80.52L83.44 11.6699H83.47L83.44 10.5099V6.99988H84.21V12.9999H83.41L80.36 8.10988H80.33L80.36 9.26988V12.9999H79.58Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                <path d="M72.14 21.75C69.79 21.75 67.87 23.54 67.87 26C67.87 28.45 69.79 30.25 72.14 30.25C74.49 30.25 76.41 28.45 76.41 26C76.41 23.54 74.49 21.75 72.14 21.75ZM72.14 28.58C70.85 28.58 69.74 27.52 69.74 26C69.74 24.47 70.85 23.42 72.14 23.42C73.43 23.42 74.54 24.47 74.54 26C74.54 27.52 73.42 28.58 72.14 28.58ZM62.82 21.75C60.47 21.75 58.55 23.54 58.55 26C58.55 28.45 60.47 30.25 62.82 30.25C65.17 30.25 67.09 28.45 67.09 26C67.09 23.54 65.17 21.75 62.82 21.75ZM62.82 28.58C61.53 28.58 60.42 27.52 60.42 26C60.42 24.47 61.53 23.42 62.82 23.42C64.11 23.42 65.22 24.47 65.22 26C65.22 27.52 64.11 28.58 62.82 28.58ZM51.74 23.06V24.86H56.06C55.93 25.87 55.59 26.62 55.08 27.13C54.45 27.76 53.47 28.45 51.75 28.45C49.09 28.45 47.01 26.31 47.01 23.65C47.01 20.99 49.09 18.8499 51.75 18.8499C53.18 18.8499 54.23 19.4099 55 20.1399L56.27 18.8699C55.19 17.8399 53.76 17.0499 51.74 17.0499C48.1 17.0499 45.04 20.0099 45.04 23.66C45.04 27.3 48.1 30.27 51.74 30.27C53.71 30.27 55.19 29.63 56.35 28.42C57.54 27.23 57.91 25.55 57.91 24.2C57.91 23.78 57.88 23.39 57.81 23.07H51.74V23.06ZM97.05 24.46C96.7 23.51 95.62 21.75 93.41 21.75C91.22 21.75 89.4 23.47 89.4 26C89.4 28.38 91.2 30.25 93.62 30.25C95.57 30.25 96.7 29.06 97.16 28.37L95.71 27.4C95.23 28.11 94.57 28.58 93.62 28.58C92.67 28.58 91.99 28.14 91.56 27.29L97.25 24.94L97.05 24.46ZM91.25 25.88C91.2 24.24 92.52 23.4 93.47 23.4C94.21 23.4 94.84 23.77 95.05 24.3L91.25 25.88ZM86.63 30H88.5V17.4999H86.63V30ZM83.57 22.7H83.5C83.08 22.2 82.28 21.75 81.26 21.75C79.13 21.75 77.18 23.62 77.18 26.02C77.18 28.4 79.13 30.26 81.26 30.26C82.27 30.26 83.08 29.81 83.5 29.29H83.56V29.9C83.56 31.53 82.69 32.4 81.29 32.4C80.15 32.4 79.44 31.58 79.15 30.89L77.52 31.57C77.99 32.7 79.23 34.08 81.29 34.08C83.48 34.08 85.33 32.79 85.33 29.65V22.01H83.56V22.7H83.57ZM81.42 28.58C80.13 28.58 79.05 27.5 79.05 26.02C79.05 24.52 80.13 23.43 81.42 23.43C82.69 23.43 83.69 24.53 83.69 26.02C83.7 27.5 82.7 28.58 81.42 28.58ZM105.81 17.4999H101.34V30H103.21V25.26H105.82C107.89 25.26 109.92 23.76 109.92 21.38C109.92 18.9999 107.87 17.4999 105.81 17.4999ZM105.85 23.52H103.2V19.2299H105.85C107.25 19.2299 108.04 20.3899 108.04 21.37C108.04 22.35 107.25 23.52 105.85 23.52ZM117.39 21.73C116.04 21.73 114.64 22.33 114.06 23.64L115.72 24.33C116.07 23.64 116.73 23.41 117.42 23.41C118.38 23.41 119.37 23.99 119.38 25.02V25.15C119.04 24.96 118.32 24.67 117.43 24.67C115.64 24.67 113.83 25.65 113.83 27.48C113.83 29.15 115.29 30.23 116.93 30.23C118.18 30.23 118.88 29.67 119.31 29.01H119.37V29.98H121.17V25.19C121.18 22.97 119.52 21.73 117.39 21.73ZM117.16 28.58C116.55 28.58 115.7 28.27 115.7 27.52C115.7 26.56 116.76 26.19 117.68 26.19C118.5 26.19 118.89 26.37 119.38 26.61C119.24 27.76 118.24 28.58 117.16 28.58ZM127.74 22L125.6 27.42H125.54L123.32 22H121.31L124.64 29.58L122.74 33.79H124.69L129.82 22H127.74ZM110.94 30H112.81V17.4999H110.94V30Z" fill="white"/>
                <path d="M14.44 7.53997C14.15 7.84997 13.98 8.32997 13.98 8.93997V31.0599C13.98 31.6799 14.15 32.1599 14.44 32.4599L14.51 32.5299L26.9 20.1499V19.9999V19.8499L14.51 7.46997L14.44 7.53997Z" fill="url(#paint0_linear_1_42)"/>
                <path d="M31.03 24.2799L26.9 20.1499V19.9999V19.8499L31.03 15.72L31.12 15.77L36.01 18.55C37.41 19.3399 37.41 20.6399 36.01 21.4399L31.12 24.2199L31.03 24.2799Z" fill="url(#paint1_linear_1_42)"/>
                <path d="M31.12 24.22L26.9 20L14.44 32.46C14.9 32.95 15.66 33.01 16.52 32.52L31.12 24.22Z" fill="url(#paint2_linear_1_42)"/>
                <path d="M31.12 15.78L16.51 7.47999C15.65 6.98999 14.89 7.04999 14.43 7.53999L26.9 20L31.12 15.78Z" fill="url(#paint3_linear_1_42)"/>
                <path opacity="0.2" d="M31.03 24.13L16.51 32.38C15.7 32.84 14.97 32.81 14.51 32.39L14.44 32.46L14.51 32.53C14.98 32.95 15.7 32.98 16.51 32.52L31.12 24.22L31.03 24.13Z" fill="black"/>
                <path opacity="0.12" d="M14.44 32.3201C14.15 32.0101 13.98 31.5302 13.98 30.9202V31.0702C13.98 31.6901 14.15 32.1701 14.44 32.4701L14.51 32.4001L14.44 32.3201Z" fill="black"/>
                <path opacity="0.12" d="M36.01 21.3L31.02 24.1301L31.11 24.2201L36 21.44C36.7 21.04 37.05 20.52 37.05 20C37 20.47 36.65 20.94 36.01 21.3Z" fill="black"/>
                <path opacity="0.25" d="M16.51 7.61994L36.01 18.7C36.64 19.06 37 19.52 37.06 20C37.06 19.48 36.71 18.95 36.01 18.56L16.51 7.47994C15.11 6.68994 13.97 7.34994 13.97 8.94994V9.09994C13.97 7.48994 15.12 6.82994 16.51 7.61994Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_d_1_42" x="0" y="0" width="143" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_42"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_42" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_42" x1="25.7997" y1="8.70967" x2="9.01737" y2="25.4921" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00A0FF"/>
                    <stop offset="0.00657445" stop-color="#00A1FF"/>
                    <stop offset="0.2601" stop-color="#00BEFF"/>
                    <stop offset="0.5122" stop-color="#00D2FF"/>
                    <stop offset="0.7604" stop-color="#00DFFF"/>
                    <stop offset="1" stop-color="#00E3FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_42" x1="37.8344" y1="20.0013" x2="13.6376" y2="20.0013" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE000"/>
                    <stop offset="0.4087" stop-color="#FFBD00"/>
                    <stop offset="0.7754" stop-color="#FFA500"/>
                    <stop offset="1" stop-color="#FF9C00"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1_42" x1="28.827" y1="22.2961" x2="6.06875" y2="45.0544" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF3A44"/>
                    <stop offset="1" stop-color="#C31162"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1_42" x1="11.2973" y1="0.176203" x2="21.4598" y2="10.3387" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#32A071"/>
                    <stop offset="0.0685" stop-color="#2DA771"/>
                    <stop offset="0.4762" stop-color="#15CF74"/>
                    <stop offset="0.8009" stop-color="#06E775"/>
                    <stop offset="1" stop-color="#00F076"/>
                </linearGradient>
            </defs>
        </svg>
    );
};
export default SvgLinks;