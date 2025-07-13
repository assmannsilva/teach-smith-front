import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { storeToRefs } from 'pinia';
import router from '@/router';

export function useRegister() {
  const auth = useAuthStore();
  let { isLoading, error } = storeToRefs(auth);

  const email = ref('');
  const password = ref('');
  const firstName = ref('');
  const surname = ref('');
  const passwordConfirmation = ref('');

  const errorsObject = ref({
    firstName: "",
    surname: "",
    password: "",
    email: "",
    passwordConfirmation: ""
  } );

  async function submitRegister() {
    const organizationRaw = localStorage.getItem("organization")
    if(!organizationRaw) {
      error.value = "Invalid Organization"
      isLoading.value = false
      return ;
    }

    const organization = JSON.parse(organizationRaw)
    const result = await auth.register({
       email: email.value, 
       password: password.value,
       password_confirmation: passwordConfirmation.value,
       first_name: firstName.value,
       surname: surname.value,
       organization_id: organization.id
    });
    if (!auth.error) router.push({name: 'home'});

    if(result.errors) {
      errorsObject.value = {
        email: result.errors.email?.[0] ?? "",
        password: result.errors.password?.[0] ?? "",
        firstName: result.errors.first_name?.[0] ?? "",
        surname: result.errors.surname?.[0] ?? "",
        passwordConfirmation: result.errors.password_confirmation?.[0] ?? "",
      }
    } 
  }

  return {
    firstName,
    surname,
    email,
    password,
    passwordConfirmation,
    submitRegister,
    isLoading,
    errorMessage: error,
    errorsObject
  };
}