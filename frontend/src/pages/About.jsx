import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit, nemo quos a eaque sit! Quibusdam, natus! Temporibus, ab ipsa? Expedita aut facilis ratione? Mollitia error ipsa saepe vel ea odio, ipsum dolorum eveniet numquam corporis alias quaerat possimus? Maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam fugiat fuga ipsa libero corrupti porro ea dolorem nobis, quia enim modi accusantium reiciendis voluptatum, in repellendus iste magnam ut.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam repellendus consectetur temporibus! Praesentium dolore asperiores beatae magnam quis dicta unde itaque odit possimus aut!</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptate ratione vitae culpa natus! Non, quam doloribus earum culpa ea placeat, maiores dolore nisi molestias iusto amet sequi voluptates. At?</p>
        </div>

        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptate ratione vitae culpa natus! Non, quam doloribus earum culpa ea placeat, maiores dolore nisi molestias iusto amet sequi voluptates. At?</p>
        </div>

        <div className="border px-10 md:px16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptate ratione vitae culpa natus! Non, quam doloribus earum culpa ea placeat, maiores dolore nisi molestias iusto amet sequi voluptates. At?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About