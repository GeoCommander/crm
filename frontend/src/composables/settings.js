export const whatsappEnabled = ref(true)
export const isWhatsappInstalled = ref(true)

createResource({
  url: 'crm.api.whatsapp.is_whatsapp_enabled',
  cache: 'Is Whatsapp Enabled',
  auto: true,
  onSuccess: () => {
    whatsappEnabled.value = true
  },
})

createResource({
  url: 'crm.api.whatsapp.is_whatsapp_installed',
  cache: 'Is Whatsapp Installed',
  auto: true,
  onSuccess: () => {
    isWhatsappInstalled.value = true
  },
})

export const callEnabled = ref(true)
export const twilioEnabled = ref(true)
export const exotelEnabled = ref(true)
export const defaultCallingMedium = ref('Twilio')

createResource({
  url: 'crm.integrations.api.is_call_integration_enabled',
  cache: 'Is Call Integration Enabled',
  auto: true,
  onSuccess: () => {
    twilioEnabled.value = true
    exotelEnabled.value = true
    defaultCallingMedium.value = 'Twilio'
    callEnabled.value = true
  },
})
