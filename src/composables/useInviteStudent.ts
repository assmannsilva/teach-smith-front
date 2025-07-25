import studentService from "@/services/student.service";
import { ref } from "vue";


export function useInviteStudent() {

  const firstName = ref('');
  const surname = ref('');
  const email = ref('');
  const grade = ref('');
  const section = ref('');
  const admissionDate = ref('');
  const registrationCode = ref('');

  const errorsObject = ref({
    firstName: "",
    surname: "",
    email: "",
    grade: "",
    section: "",
    admissionDate: "",
    registrationCode: ""
  });

  function resetErrors() {
    for (const key in errorsObject.value) {
      errorsObject.value[key as keyof typeof errorsObject.value] = "";
    }
  }

  async function inviteStudent() : Promise<boolean> {
    resetErrors()

    const result = await studentService.invite({
      first_name: firstName.value.trim(),
      surname: surname.value.trim(),
      email: email.value.trim(),
      grade: grade.value,
      section: section.value,
      admission_date: admissionDate.value,
      registration_code: registrationCode.value
    })

    if(result.errors) {
      errorsObject.value = {
        email: result.errors.email?.[0] ?? "",
        firstName: result.errors.first_name?.[0] ?? "",
        surname: result.errors.surname?.[0] ?? "",
        grade: result.errors.grade?.[0] ?? "",
        section: result.errors.section?.[0] ?? "",
        admissionDate: result.errors.admission_date?.[0] ?? "",
        registrationCode: result.errors.registration_code?.[0] ?? "",
      }
      return false
    }

    return true
    
  }

  return {
    inviteStudent,
    errorsObject,
    firstName,
    email,
    surname,
    grade,
    section,
    admissionDate,
    registrationCode,
  };
}