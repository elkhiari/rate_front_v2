import { TypeAnimation } from "react-type-animation"

const TypingAnimation = () => {
    return (
        <TypeAnimation
      sequence={[
        'المرجو مساعدتنا لقياس مدى رضاكم وانطباعكم عن جودة خدماتنا',
        1000, 
        'Aidez-nous à mesurer votre satisfaction et votre impression sur la qualité de nos services',
        1000
      ]}
      wrapper="h1"
      className="text-xl font-bold text-center"
      speed={50}
      repeat={Infinity}
    />
    )
}

export {TypingAnimation}