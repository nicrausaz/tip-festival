<template>
  <q-page>
    <q-timeline responsive color="secondary" style="padding: 0 24px;">
      <q-timeline-entry heading>{{$store.state.moduleLanguage.translations.festival_program}}</q-timeline-entry>
      <q-timeline-entry heading>{{$store.state.moduleLanguage.translations.festival_6thjuly}}</q-timeline-entry>

      <q-timeline-entry title="DJ Van Shark" subtitle="16H30" side="left" color="amber">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8VFM3FIEKm8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Superwak Clique" subtitle="19H00" side="right" color="amber">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fummlAwEyEM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="Les Uns" subtitle="21H00" side="left" color="amber">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tx0M_MB62cU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </q-timeline-entry>
      <q-timeline-entry title="La Smala" subtitle="23H00" side="right" color="amber">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tVgMNI1zt74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageProgram'
}
</script>
