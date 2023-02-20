/*! For license information please see main.d115f53b.js.LICENSE.txt */
  display: flex;
  justify-content: center;
`,EB=vB.div`
  display: flex;
  background: ${e=>e.backgroundColor};
  width: 42px;
  height: 42px;
  border-radius: 25px;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.15, 1.15);
  }
`,SB=vB.img`
  margin: 0 auto;
  width: 24px;
  height: 24px;
`,xB=t=>{let{providers:r,socialLogin:n}=t;const i=xO();return e.createElement(kB,null,r.map((t=>e.createElement(EB,{backgroundColor:i.fg,key:t,onClick:()=>n(t)},e.createElement(SB,{src:AB(t,i.mode),alt:""})))))},CB=vB.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`,PB=vB.p`
  font-size: 12px;
  font-weight: 400;
`,TB=vB.a`
  width: 60px;
  height: 15px;
  margin-left: 5px;
`,MB=e=>{const t="https://auth-icons.s3.ap-south-1.amazonaws.com/";return"light"==e?t+"arcana-logo-dark.png":t+"arcana-logo.png"},OB=()=>{const t=xO();return e.createElement(CB,null,e.createElement(PB,null,"Powered by"),e.createElement(TB,{href:"https://arcana.network",target:"_blank"},e.createElement("img",{src:MB(t.mode)})))},IB=vB.div`
  padding: 30px 30px;
  min-width: 325px;
  max-width: 325px;
  min-height: 480px;
  background-color: ${e=>e.backgroundColor};
  color: ${e=>e.textColor};
  margin: 0 auto;
  font-family: "Sora", sans-serif;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`,BB=vB.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > * {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`,RB=t=>{let r=t.theme?t.theme:"dark";return e.createElement(SO,{theme:r},e.createElement(NB,null,t.children))},NB=t=>{let{children:r}=t;const n=xO();return e.createElement(IB,{textColor:n.fg,backgroundColor:n.bd},e.createElement(BB,null,r),e.createElement(OB,null))},UB=vB.button`
  width: 100%;
  height: 2.75rem;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${e=>e.textColor};
  background: ${e=>e.backgroundColor};
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.05, 1.15);
  }
`,jB=t=>{const r=xO();return e.createElement(UB,{textColor:r.bg,backgroundColor:r.fg,onClick:e=>t.onClick?t.onClick(e):null},t.children)},LB=vB.input`
  height: 45px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.textColor};
  background: ${e=>e.backgroundColor};
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${e=>e.inputShadow};
`,DB=vB.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`,FB=vB.label`
  font-size: 14px;
  color: #8d8d8d;
  font-weight: 400;
`,zB=t=>{let{email:r,setEmail:n,linkLogin:i}=t;const o=xO();return e.createElement(DB,null,e.createElement(FB,{htmlFor:"email"},"Email"),e.createElement(LB,{backgroundColor:o.bg,textColor:o.fg,inputShadow:o.inputShadow,type:"email",value:r,onChange:e=>{n(e.target.value)}}),e.createElement(jB,{onClick:()=>i(r)},"Get Link"))},HB=vB.div`
  font-family: "Montserrat", sans-serif;
`,KB=vB.h1`
  text-align: center;
`,qB=vB.p`
  font-size: 12px;
  font-weight: 400;
`,VB=vB.div`
  width: 70px;
  height: 70px;
  border-radius: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`,GB=vB.img`
  max-width: 70px;
  max-height: 70px;
  margin: 0 auto;
  display: inline-block;
`,WB={light:"data:image/svg+xml,%3Csvg fill='none' height='28' viewBox='0 0 31 28' width='31' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m1.34515 2.72906.891.454zm1.38353-1.38391.45399.891zm0 24.64295.45399-.891zm-1.38353-1.3837-.89101.454zm27.81005 0-.891-.454zm-1.3845 1.3837-.454-.891zm1.3845-23.25904-.891.454zm-1.3845-1.38391.454-.89101zm-27.529957 19.58745c-.359422.4193-.3108602 1.0506.108466 1.41.419326.3594 1.050621.3109 1.410051-.1084zm8.308557-8.1568-.75926-.6507zm3.8696.0269.7682-.6402zm4.2218 5.0662-.7682.6402zm3.7381.1695.7071.7071zm4.5567-.5781.7809-.6247zm3.7844 6.3312c.345.4313.9743.5012 1.4055.1562.4313-.345.5012-.9743.1562-1.4056zm-6.123-7.6922-.2772-.9608zm1.0429.0578.3817-.9243zm-5.7012 2.9691-.3687.9296zm1.0332.0468-.2831-.9591zm-9.01853-7.7124-.33415-.9425zm1.08013.0075.3473-.9378zm17.4666-5.40151v15.20001h2v-15.20001zm-4.0664 19.26671h-18.36662v2h18.36662zm-22.4336-4.0667v-15.20001h-2v15.20001zm4.06698-19.2666h18.36662v-2h-18.36662zm-4.06698 4.06659c0-.90325.00078-1.52052.03982-1.99837.03809-.46616.10756-.71093.19633-.88516l-1.78201-.90799c-.256369.50316-.359478 1.0404-.4076753 1.63028-.0472425.57819-.0464647 1.29099-.0464647 2.16124zm4.06698-6.06659c-.87026 0-1.58324-.00077714-2.1616.0464623-.58997.0481876-1.12747.1512737-1.63069.4076777l.90798 1.78201c.17417-.08874.41907-.15823.88552-.19633.47806-.03904 1.09554-.03982 1.99879-.03982zm-3.83083 3.18306c.20786-.40795.53909-.73931.94652-.94691l-.90798-1.78201c-.78427.399604-1.42121 1.03718-1.82055 1.82093zm3.83083 22.15024c-.90323 0-1.52071-.0008-1.99877-.0398-.46644-.0381-.71136-.1076-.88554-.1964l-.90798 1.782c.5032.2564 1.04069.3595 1.63067.4077.57837.0473 1.29134.0465 2.16162.0465zm-6.06698-4.0667c0 .8702-.00077757 1.5831.0464639 2.1614.0481939.5899.1512951 1.1272.4076761 1.6304l1.78201-.908c-.08876-.1742-.15823-.419-.19633-.8853-.03904-.4779-.03982-1.0953-.03982-1.9985zm3.18267 3.8305c-.40753-.2076-.73871-.5389-.94652-.9467l-1.78201.908c.399395.7838 1.03639 1.4212 1.82055 1.8207zm25.31733-3.8305c0 .9033-.0007 1.5207-.0397 1.9987-.038.4663-.1074.711-.1961.8851l1.782.908c.2564-.5033.3594-1.0408.4075-1.6306.0472-.5782.0463-1.2911.0463-2.1612zm-4.0664 6.0667c.8703 0 1.583.0008 2.1611-.0465.5898-.0482 1.1269-.1513 1.63-.4077l-.908-1.782c-.1743.0888-.419.1583-.885.1964-.4777.039-1.0948.0398-1.9981.0398zm3.8306-3.1829c-.2075.4072-.5393.7387-.9475.9467l.908 1.782c.7834-.3992 1.4218-1.0362 1.8215-1.8207zm2.2358-18.08381c0-.87015.0009-1.58296-.0463-2.16108-.0481-.58982-.1511-1.12717-.4075-1.63044l-1.782.90799c.0887.17412.1581.41878.1961.885.039.47792.0397 1.09518.0397 1.99853zm-6.0664-4.06659c.9033 0 1.5204.00078 1.9981.03982.466.03808.7107.10753.885.19633l.908-1.78201c-.5032-.256346-1.0402-.3594702-1.63-.4076737-.5781-.04724454-1.2908-.0464663-2.1611-.0464663zm5.6126.27507c-.3997-.78441-1.0379-1.421666-1.8215-1.82093l-.908 1.78201c.4081.20794.74.53963.9475.94691zm-28.28694 19.95913 7.54929-8.8076-1.51851-1.3015-7.549297 8.8075zm9.89134-8.7913 4.2219 5.0662 1.5364-1.2804-4.2218-5.0662zm9.4353 5.3026.7871-.787-1.4143-1.4142-.787.787zm3.0688-.6605 4.5652 5.7065 1.5617-1.2494-4.5652-5.7065zm-2.2817-.1265c.3586-.3586.5837-.5825.7657-.7359.1741-.1468.2329-.1618.2355-.1625l-.5545-1.9216c-.3895.1124-.6999.3271-.9701.5549-.2623.2212-.5568.5168-.8909.8509zm3.8434-1.1229c-.2953-.3691-.5554-.6954-.792-.9443-.2435-.2563-.5284-.5039-.9029-.6585l-.7634 1.8485c.0027.0012.0597.0227.2167.1879.164.1726.3632.42.6799.8158zm-2.8422.2245c.1268-.0366.2618-.0292.3839.0212l.7634-1.8485c-.5404-.2232-1.14-.2565-1.7018-.0943zm-7.0017 1.449c.2967.3561.5587.6719.7958.9123.2447.248.5298.4869.9016.6344l.7374-1.8591c-.0028-.0011-.0587-.0213-.2153-.18-.1642-.1664-.3639-.4049-.6831-.788zm3.7992-1.1778c-.3523.3524-.573.5719-.7516.7226-.1704.1439-.2282.1591-.2314.16l.5661 1.9182c.3834-.1131.6889-.325.9553-.5498.2582-.218.5478-.5088.8758-.8368zm-2.1018 2.7245c.537.213 1.1311.2398 1.6849.0763l-.5661-1.9182c-.1252.037-.2603.0308-.3814-.0172zm-8.26135-6.6292c.34723-.4051.5662-.6593.74545-.8353.1726-.1694.2328-.188.2334-.1882l-.66828-1.885c-.39752.1409-.70386.3885-.966.6458-.25541.2507-.53935.5835-.86308.9612zm3.87855-1.2641c-.3184-.3821-.5977-.7188-.8495-.9729-.2585-.2609-.5614-.5128-.9569-.6593l-.6945 1.8756c.0007.0002.0605.0196.2307.1914.1768.1784.3921.4357.7337.8456zm-2.8997.2406c.1287-.0456.2707-.0446.3988.0028l.6945-1.8756c-.5672-.2099-1.1915-.2144-1.76158-.0122zm9.7126-2.9031c-.3222 0-.5833-.26117-.5833-.58333h-2c0 1.42673 1.1566 2.58333 2.5833 2.58333zm.5833-.58333c0 .32216-.2611.58333-.5833.58333v2c1.4267 0 2.5833-1.1566 2.5833-2.58333zm-.5833-.58334c.3222 0 .5833.26117.5833.58334h2c0-1.42674-1.1566-2.58334-2.5833-2.58334zm0-2c-1.4267 0-2.5833 1.1566-2.5833 2.58334h2c0-.32217.2611-.58334.5833-.58334z' fill='%23101010'/%3E%3C/svg%3E",dark:"data:image/svg+xml,%3Csvg width='31' height='28' viewBox='0 0 31 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.34515 2.72906L2.23615 3.18306L1.34515 2.72906ZM2.72868 1.34515L3.18267 2.23615L2.72868 1.34515ZM2.72868 25.9881L3.18267 25.0971L3.18267 25.0971L2.72868 25.9881ZM1.34515 24.6044L0.45414 25.0584L0.45414 25.0584L1.34515 24.6044ZM29.1552 24.6044L28.2642 24.1504L29.1552 24.6044ZM27.7707 25.9881L27.3167 25.0971L27.7707 25.9881ZM29.1552 2.72906L28.2642 3.18306L28.2642 3.18306L29.1552 2.72906ZM27.7707 1.34515L28.2247 0.45414L28.2247 0.45414L27.7707 1.34515ZM0.240743 20.9326C-0.118679 21.3519 -0.0701172 21.9832 0.349209 22.3426C0.768535 22.702 1.39983 22.6535 1.75926 22.2342L0.240743 20.9326ZM8.5493 12.7758L7.79004 12.1251L7.79004 12.1251L8.5493 12.7758ZM12.4189 12.8027L13.1871 12.1625L13.1871 12.1625L12.4189 12.8027ZM16.6407 17.8689L15.8725 18.5091L15.8725 18.5091L16.6407 17.8689ZM20.3788 18.0384L21.0859 18.7455L21.0859 18.7455L20.3788 18.0384ZM24.9355 17.4603L25.7164 16.8356L25.7164 16.8356L24.9355 17.4603ZM28.7199 23.7915C29.0649 24.2228 29.6942 24.2927 30.1254 23.9477C30.5567 23.6027 30.6266 22.9734 30.2816 22.5421L28.7199 23.7915ZM22.5969 16.0993L22.3197 15.1385L22.3197 15.1385L22.5969 16.0993ZM23.6398 16.1571L24.0215 15.2328L23.6398 16.1571ZM17.9386 19.1262L17.5699 20.0558L17.5699 20.0558L17.9386 19.1262ZM18.9718 19.173L18.6887 18.2139L18.6887 18.2139L18.9718 19.173ZM9.95327 11.4606L9.61912 10.5181L9.61912 10.5181L9.95327 11.4606ZM11.0334 11.4681L11.3807 10.5303L11.3807 10.5303L11.0334 11.4681ZM28.5 6.06659V21.2666H30.5V6.06659H28.5ZM24.4336 25.3333H6.06698V27.3333H24.4336V25.3333ZM2 21.2666V6.06659H0V21.2666H2ZM6.06698 2H24.4336V0H6.06698V2ZM2 6.06659C2 5.16334 2.00078 4.54607 2.03982 4.06822C2.07791 3.60206 2.14738 3.35729 2.23615 3.18306L0.45414 2.27507C0.197771 2.77823 0.094662 3.31547 0.0464647 3.90535C-0.000777803 4.48354 0 5.19634 0 6.06659H2ZM6.06698 0C5.19672 0 4.48374 -0.000777136 3.90538 0.0464623C3.31541 0.0946499 2.77791 0.197736 2.27469 0.45414L3.18267 2.23615C3.35684 2.14741 3.60174 2.07792 4.06819 2.03982C4.54625 2.00078 5.16373 2 6.06698 2V0ZM2.23615 3.18306C2.44401 2.77511 2.77524 2.44375 3.18267 2.23615L2.27469 0.45414C1.49042 0.853744 0.85348 1.49132 0.45414 2.27507L2.23615 3.18306ZM6.06698 25.3333C5.16375 25.3333 4.54627 25.3325 4.06821 25.2935C3.60177 25.2554 3.35685 25.1859 3.18267 25.0971L2.27469 26.8791C2.77789 27.1355 3.31538 27.2386 3.90536 27.2868C4.48373 27.3341 5.1967 27.3333 6.06698 27.3333V25.3333ZM0 21.2666C0 22.1368 -0.000777574 22.8497 0.0464639 23.428C0.0946578 24.0179 0.197759 24.5552 0.45414 25.0584L2.23615 24.1504C2.14739 23.9762 2.07792 23.7314 2.03982 23.2651C2.00078 22.7872 2 22.1698 2 21.2666H0ZM3.18267 25.0971C2.77514 24.8895 2.44396 24.5582 2.23615 24.1504L0.45414 25.0584C0.853535 25.8422 1.49053 26.4796 2.27469 26.8791L3.18267 25.0971ZM28.5 21.2666C28.5 22.1699 28.4993 22.7873 28.4603 23.2653C28.4223 23.7316 28.3529 23.9763 28.2642 24.1504L30.0462 25.0584C30.3026 24.5551 30.4056 24.0176 30.4537 23.4278C30.5009 22.8496 30.5 22.1367 30.5 21.2666H28.5ZM24.4336 27.3333C25.3039 27.3333 26.0166 27.3341 26.5947 27.2868C27.1845 27.2386 27.7216 27.1355 28.2247 26.8791L27.3167 25.0971C27.1424 25.1859 26.8977 25.2554 26.4317 25.2935C25.954 25.3325 25.3369 25.3333 24.4336 25.3333V27.3333ZM28.2642 24.1504C28.0567 24.5576 27.7249 24.8891 27.3167 25.0971L28.2247 26.8791C29.0081 26.4799 29.6465 25.8429 30.0462 25.0584L28.2642 24.1504ZM30.5 6.06659C30.5 5.19644 30.5009 4.48363 30.4537 3.90551C30.4056 3.31569 30.3026 2.77834 30.0462 2.27507L28.2642 3.18306C28.3529 3.35718 28.4223 3.60184 28.4603 4.06806C28.4993 4.54598 28.5 5.16324 28.5 6.06659H30.5ZM24.4336 2C25.3369 2 25.954 2.00078 26.4317 2.03982C26.8977 2.0779 27.1424 2.14735 27.3167 2.23615L28.2247 0.45414C27.7215 0.197794 27.1845 0.0946698 26.5947 0.0464663C26.0166 -0.000778238 25.3039 0 24.4336 0V2ZM30.0462 2.27507C29.6465 1.49066 29.0083 0.853404 28.2247 0.45414L27.3167 2.23615C27.7248 2.44409 28.0567 2.77578 28.2642 3.18306L30.0462 2.27507ZM1.75926 22.2342L9.30855 13.4266L7.79004 12.1251L0.240743 20.9326L1.75926 22.2342ZM11.6506 13.4429L15.8725 18.5091L17.4089 17.2287L13.1871 12.1625L11.6506 13.4429ZM21.0859 18.7455L21.873 17.9585L20.4587 16.5443L19.6717 17.3313L21.0859 18.7455ZM24.1547 18.085L28.7199 23.7915L30.2816 22.5421L25.7164 16.8356L24.1547 18.085ZM21.873 17.9585C22.2316 17.5999 22.4567 17.376 22.6387 17.2226C22.8128 17.0758 22.8716 17.0608 22.8742 17.0601L22.3197 15.1385C21.9302 15.2509 21.6198 15.4656 21.3496 15.6934C21.0873 15.9146 20.7928 16.2102 20.4587 16.5443L21.873 17.9585ZM25.7164 16.8356C25.4211 16.4665 25.161 16.1402 24.9244 15.8913C24.6809 15.635 24.396 15.3874 24.0215 15.2328L23.2581 17.0813C23.2608 17.0825 23.3178 17.104 23.4748 17.2692C23.6388 17.4418 23.838 17.6892 24.1547 18.085L25.7164 16.8356ZM22.8742 17.0601C23.001 17.0235 23.136 17.0309 23.2581 17.0813L24.0215 15.2328C23.4811 15.0096 22.8815 14.9763 22.3197 15.1385L22.8742 17.0601ZM15.8725 18.5091C16.1692 18.8652 16.4312 19.181 16.6683 19.4214C16.913 19.6694 17.1981 19.9083 17.5699 20.0558L18.3073 18.1967C18.3045 18.1956 18.2486 18.1754 18.092 18.0167C17.9278 17.8503 17.7281 17.6118 17.4089 17.2287L15.8725 18.5091ZM19.6717 17.3313C19.3194 17.6837 19.0987 17.9032 18.9201 18.0539C18.7497 18.1978 18.6919 18.213 18.6887 18.2139L19.2548 20.1321C19.6382 20.019 19.9437 19.8071 20.2101 19.5823C20.4683 19.3643 20.7579 19.0735 21.0859 18.7455L19.6717 17.3313ZM17.5699 20.0558C18.1069 20.2688 18.701 20.2956 19.2548 20.1321L18.6887 18.2139C18.5635 18.2509 18.4284 18.2447 18.3073 18.1967L17.5699 20.0558ZM9.30855 13.4266C9.65578 13.0215 9.87475 12.7673 10.054 12.5913C10.2266 12.4219 10.2868 12.4033 10.2874 12.4031L9.61912 10.5181C9.2216 10.659 8.91526 10.9066 8.65312 11.1639C8.39771 11.4146 8.11377 11.7474 7.79004 12.1251L9.30855 13.4266ZM13.1871 12.1625C12.8687 11.7804 12.5894 11.4437 12.3376 11.1896C12.0791 10.9287 11.7762 10.6768 11.3807 10.5303L10.6862 12.4059C10.6869 12.4061 10.7467 12.4255 10.9169 12.5973C11.0937 12.7757 11.309 13.033 11.6506 13.4429L13.1871 12.1625ZM10.2874 12.4031C10.4161 12.3575 10.5581 12.3585 10.6862 12.4059L11.3807 10.5303C10.8135 10.3204 10.1892 10.3159 9.61912 10.5181L10.2874 12.4031ZM20 9.5C19.6778 9.5 19.4167 9.23883 19.4167 8.91667H17.4167C17.4167 10.3434 18.5733 11.5 20 11.5V9.5ZM20.5833 8.91667C20.5833 9.23883 20.3222 9.5 20 9.5V11.5C21.4267 11.5 22.5833 10.3434 22.5833 8.91667H20.5833ZM20 8.33333C20.3222 8.33333 20.5833 8.5945 20.5833 8.91667H22.5833C22.5833 7.48993 21.4267 6.33333 20 6.33333V8.33333ZM20 6.33333C18.5733 6.33333 17.4167 7.48993 17.4167 8.91667H19.4167C19.4167 8.5945 19.6778 8.33333 20 8.33333V6.33333Z' fill='%23F7F7F7'/%3E%3C/svg%3E%0A"},$B=()=>{const t=xO(),{logo:r}=OO();return e.createElement(e.Fragment,null,e.createElement(VB,null,e.createElement(GB,{src:r,alt:"App Logo",onError:e=>{let{currentTarget:r}=e;r.onerror=null,r.src=WB[t.mode]}})),e.createElement(HB,null,e.createElement(KB,null,"Welcome"),e.createElement(qB,null,"We\u2019ll email you a login link for a password-free sign in.")))},YB=vB.p`
  text-transform: uppercase;
  text-decoration: underline;
  color: ${e=>e.textColor};
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  cursor: pointer;
`,JB=t=>{let{text:r,method:n}=t;return e.createElement(YB,{textColor:"#13a3fd",onClick:()=>n()},r)};var ZB,QB,XB=function(e){return{display:e?"flex":"none"}},eR="#4fa94d",tR={"aria-busy":!0,role:"status"},rR=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},nR=242.776657104492,iR=wB(ZB||(ZB=rR(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*nR,nR,.11*nR,.35*nR,nR,.35*nR,.01*nR,nR,.99*nR);vB.path(QB||(QB=rR(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*nR,nR,iR,1.6);var oR,aR,sR,cR,uR,lR=function(){return lR=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},lR.apply(this,arguments)},fR=function(e,t,r){var n=Math.max(e,t),i=-r-n/2+1,o=2*r+n;return[i,i,o,o].join(" ")},dR=function(t){var r,n=t.height,i=void 0===n?80:n,o=t.width,a=void 0===o?80:o,s=t.color,c=void 0===s?eR:s,u=t.secondaryColor,l=void 0===u?eR:u,f=t.ariaLabel,d=void 0===f?"oval-loading":f,h=t.wrapperStyle,p=t.wrapperClass,m=t.visible,g=void 0===m||m,y=t.strokeWidth,b=void 0===y?2:y,v=t.strokeWidthSecondary;return e.createElement("div",lR({style:lR(lR(lR({},XB(g)),h),{padding:3}),className:p,"data-testid":"oval-loading","aria-label":d},tR),e.createElement("svg",{width:a,height:i,viewBox:fR(Number(b),Number(v||b),20),xmlns:"http://www.w3.org/2000/svg",stroke:c,"data-testid":"oval-svg"},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("g",{transform:"translate(1 1)",strokeWidth:Number(v||b),"data-testid":"oval-secondary-group"},e.createElement("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:l,strokeWidth:b}),e.createElement("path",{d:(r=20,["M"+r+" 0c0-9.94-8.06",r,r,r].join("-"))},e.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"}))))))},hR=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},pR=wB(sR||(sR=hR(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));vB.svg(cR||(cR=hR(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),pR,(oR="speed",aR="0.75",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[oR])return e[oR];if(oR&&oR.indexOf(".")>0){for(var t=oR.split("."),r=t.length,n=e[t[0]],i=1;null!=n&&i<r;)n=n[t[i]],i+=1;if("undefined"!==typeof n)return n}return aR})),vB.polyline(uR||(uR=hR(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width}));var mR,gR,yR,bR=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},vR=wB(mR||(mR=bR(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));vB.polygon(gR||(gR=bR(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),vR),vB.svg(yR||(yR=bR(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));const wR=vB.p`
  text-align: center;
  padding: 0 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 22px;
`,_R=t=>{const r=xO();return e.createElement(e.Fragment,null,e.createElement(dR,{height:70,width:70,color:r.fg,wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#8D8D8D",strokeWidth:8,strokeWidthSecondary:8}),t.text?e.createElement(wR,null,t.text):"",t.children?e.createElement(e.Fragment,null,t.children):"")},AR=vB.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  &:before,
  &:after {
    content: "";
    flex: 1 1 auto;
    border-bottom: 1px solid #000;
  }

  &:before {
    margin-right: 1rem;
  }
  &:after {
    margin-left: 1rem;
  }
//# sourceMappingURL=main.d115f53b.js.map