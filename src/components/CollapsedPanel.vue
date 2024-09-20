<template>
<div>
    <b-card style="height: 90vh;overflow-y: auto;">
        <b-row>
            <!-- collapsed user panel caller -->
            <b-col cols="2">
                <b-button @click="back()" class="btn btn-info btn-sm text-white">{{ '>' }}</b-button>
            </b-col>
        </b-row>

        <!-- list of chat members -->
        <b-card-body><small class="text-muted">In Chat</small></b-card-body>
        <b-row v-for="user in members" :key="user.id">
            <!-- if NOT in office show BLACK initials, hover for user details -->
            <p v-if="user.in_office != null"
                v-b-popover.hover.html="user.department + '<br/>' + user.role + '<br/>' + user.status"
                placement="leftbottom"
                :title="user.name"
            >
                {{ user.initials }}
            </p>
            <!-- if in office show BLUE initials, hover for user details -->
            <p v-else
                class="text-primary"
                v-b-popover.hover.html="user.department + '<br/>' + user.role + '<br/>' + user.status"
                placement="leftbottom"
                :title="user.name"
            >
                {{ user.initials }}
            </p>
        </b-row>
    </b-card>
</div>
</template>

<script>

export default {
    name: 'CollapsedPanel',
	props:{
		members: []
	},
    methods: {
        // collapsed user panel caller
        back() {
            this.$root.$emit('collapse')
        }
    }
}
</script>