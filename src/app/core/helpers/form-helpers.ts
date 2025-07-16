import { FormBuilder, Validators } from "@angular/forms";

export function createLoginFormGroup(fb: FormBuilder) {
  return fb.group({
    usernameOrEmail: fb.control<string | null>(null, { validators: [Validators.required] }),
    password: fb.control<string | null>(null, { validators: [Validators.required] })
  });
}

export function createRegisterFormGroup(fb: FormBuilder) {
  return fb.group({
    firstName: fb.control<string | null>(null, { validators: [Validators.required] }),
    lastName: fb.control<string | null>(null, { validators: [Validators.required] }),
    email: fb.control<string | null>(null, { validators: [Validators.required, Validators.email] }),
    username: fb.control<string | null>(null, { validators: [Validators.required] }),
    hireDate: fb.control<Date | null>(null, { validators: [Validators.required] }),
    password: fb.control<string | null>(null, { validators: [Validators.required] })
  });
}