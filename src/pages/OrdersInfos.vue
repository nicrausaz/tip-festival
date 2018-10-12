<template>
 <q-page class="flex flex-center">
   <q-card>
    <q-card-title>
      Card Title
    </q-card-title>
    <q-card-separator />
      <q-card-main>
         <q-field icon="mail" label="Email" helper="Type the email we can use to contact you" error-label="Please type a valid email"
          count
        >
          <q-input
            type="email"
            v-model="email"
            @blur="$v.email.$touch"
          />
  </q-field>
      </q-card-main>
    </q-card>
 </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
