import { computed, defineComponent, ref, watchEffect, nextTick } from 'vue'
import PInput from './components/form/PInput'
import PListbox from './components/form/PListbox'
import './helpers/generate-class'
import masks from './helpers/phone-mask.json'

const parsedMasks = Object.entries(masks).reduce((acc, [key, value]) => {
  if (!(key in acc)) Object.assign(acc, { [key]: [] })

  //@ts-expect-error
  acc[key].push(value)

  return acc
}, {})

export default defineComponent({
  name: 'App',
  setup() {
    const loading = ref(true)
    const code = ref('US')
    const number = ref('')
    const phoneInput = ref()

    const countries = ref<
      {
        flag: string
        name: string
        alpha2Code: string
        callingCodes: string[]
      }[]
    >([])

    watchEffect(() => {
      const country = countries.value.find(
        (country) => country.alpha2Code === code.value
      )
      if (country) {
        number.value = ''
      }

      const input = phoneInput.value?.$el as HTMLElement

      if (input) {
        const i = input.querySelector('input')
        nextTick(() => i?.focus())
      }
    })

    const mask = computed(() => {
      //@ts-ignore
      return parsedMasks[code.value] ?? ''
    })

    const fetchCountries = async () => {
      loading.value = true
      const data = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=alpha2Code;name;callingCodes;flag'
      )
      countries.value = await data.json()
      loading.value = false
    }

    fetchCountries()

    const countriesOptions = computed(() =>
      countries.value.map((country) => ({
        value: country.alpha2Code,
        label: (
          <div class='flex space-x-3 items-center'>
            <img src={country.flag} alt='flag' class='h-3 w-5 object-cover' />
            <span class='whitespace-nowrap'>{country.alpha2Code}</span>
          </div>
        ),
      }))
    )

    return () => (
      <div class='max-w-xl m-auto mt-10'>
        <p class='text-gray-600'>Value: {number.value}</p>
        <h1 class='text-xl font-bold p-1 space-y-10'>Input</h1>
        <div class='border rounded p-6'>
          <PInput
            ref={phoneInput}
            label='Phone Number'
            v-model={number.value}
            mask={mask.value}
            prepend={
              <PListbox
                color='amber'
                noWrapper
                value={code}
                options={countriesOptions.value}
              />
            }
          ></PInput>
        </div>
      </div>
    )
  },
})
