<template>
<div>
  <ButtonClose ref="buttonClose"/>
  <div>
    <v-card class="pt-4">
      <v-card-title>
        <v-btn @click="refresh" flat icon><v-icon>cached</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          style="margin-right:60px"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        v-if="users"
      >
        <template slot="items" slot-scope="props">
          <td style="user-select: text">{{ props.item.uid }}</td>
          <td class="user-select: text">{{ new Date(props.item.lastGameDate).toLocaleTimeString() }} le {{ new Date(props.item.lastGameDate).toLocaleDateString() }}</td>
          <td style="user-select: text">{{ props.item.displayName }}</td>
          <td v-if="props.item.battleInProgress" style="user-select: text">{{ Object.keys(props.item.battleInProgress).length }}</td>
          <td v-else style="user-select: text">0</td>
          <td style="user-select: text">{{ props.item.elo }}</td>
          <td style="user-select: text">{{ props.item.bestCombo }}</td>
          <td style="user-select: text">{{ props.item.settings.version }}</td>
          <td style="user-select: text">{{ props.item.language }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      headers: [
        { text: "UID", align: "left", sortable: false, value: "uid" },
        { text: "Last Game Date", value: "lastGameDate" },
        { text: "Name", align: "left", value: "displayName" },
        { text: "Battle", sortable: false, value: "" },
        { text: "Elo", value: "elo" },
        { text: "Best Combo", value: "bestCombo" },
        { text: "Version", value: "settings.version" },
        { text: "Language", value: "language" }
      ]
    };
  },
  components: {
    ButtonClose: () => import("@/components/ButtonClose")
  },
  computed: {
    ...mapGetters(["users"])
  },
  mounted: function() {
    this.$store.dispatch("fetchAllUsersData");
  },
  methods: {
    refresh() {
      this.$store.dispatch("fetchAllUsersData");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
