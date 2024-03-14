import {generateClasses} from '@formkit/themes'
import { applicationIcons, ethereum } from '@formkit/icons'
import { reset } from '@formkit/vue'

const config={
    config:{
        classes:generateClasses({
            global:{
                wrapper:'space-y-2 mb-3',
                message:'bg-red-500 text-center text-sm font-bold uppercase p-2 my-5 text-white',
                label:'block mb-1 font-bold text-lg text-white',
                input:'w-full p-3 border border-white bg-black rounded-lg text-white font-semibold placeholder-gray-400'
            },
            submit:{
                input:'$reset bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold w-full p-3 mt-10',
            },
            icons: {
                ...applicationIcons, // spread an entire group of icons
                ethereum, // or add single icons
               
              }
        })
    }
}

export default config