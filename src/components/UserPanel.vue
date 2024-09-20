<template>
<div>
    <b-card style="height: 80vh;overflow-y: auto;">
        <b-row>
            <b-col cols="10">
                <!-- dropdown to be used to sort members in user panel -->
                <b-dropdown no-caret text="sort" size="sm" variant="secondary">
                    <b-dropdown-item href="#">In Chat</b-dropdown-item>
                    <b-dropdown-item href="#">In Office</b-dropdown-item>
                    <b-dropdown-item href="#">Department</b-dropdown-item>
                    <b-dropdown-item href="#">All Members</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="2">
                <!-- button calls collapsed listener -->
                <b-button @click="back()" class="btn btn-info btn-sm text-white">{{ '<' }}</b-button>
            </b-col>
        </b-row>

        <!-- List of members in selected chat -->
        <b-card-body><small class="text-muted">In Chat</small></b-card-body>
        <b-row v-for="user in members" :key="user.id">
            <b-col cols="2">
                <!-- display if user is in office -->
                <p v-if="user.in_office != null" class="text-primary" v-b-popover.hover.right="'In Office'">IO</p>
            </b-col>
            <b-col cols="8">
                    <p>
                        {{ user.name }} 
                        <small class="text-muted ml-auto">{{ user.department + ' (' + user.role + ')' }}</small>
                    </p>
            </b-col>
            <b-col cols="2">
                <!-- hover over status icon for describtion -->
                <b-icon v-if="user.status == 'offline'" icon="circle-fill" variant="danger"  v-b-popover.hover.left="user.status"></b-icon>
                <b-icon v-else-if="user.status == 'online'" icon="circle-fill" variant="success"  v-b-popover.hover.left="user.status"></b-icon>
                <b-icon v-else icon="circle-fill" variant="secondary" v-b-popover.hover.left="user.status"></b-icon>
            </b-col>
        </b-row>

        <!-- List of all members -->
        <b-card-body><small class="text-muted">All Members</small></b-card-body>

        <b-row v-for="user in users" :key="user.id">
            <b-col cols="2">
                <p v-if="user.in_office != null" class="text-primary" v-b-popover.hover.right="'In Office'">IO</p>
            </b-col>
            <b-col cols="8">
                    <p>
                        {{ user.name }} 
                        <small class="text-muted ml-auto">{{ user.department + ' (' + user.role + ')' }}</small>
                    </p>
            </b-col>
            <b-col cols="2">
                <b-icon v-if="user.status == 'offline'" icon="circle-fill" variant="danger"  v-b-popover.hover.left="user.status"></b-icon>
                <b-icon v-else-if="user.status == 'online'" icon="circle-fill" variant="success"  v-b-popover.hover.left="user.status"></b-icon>
                <b-icon v-else icon="circle-fill" variant="secondary" v-b-popover.hover.left="user.status"></b-icon>
            </b-col>
        </b-row>
    </b-card>
    <!-- section to be used to search for members -->
    <b-card style="height: 10vh;">
        <b-card-body>
            search
        </b-card-body>
    </b-card>
</div>
</template>

<script>
import users from "@/store/users";

export default {
    name: 'UserPanel',
	props:{
		members: []
	},
	computed:{
		users
	},
    methods: {
        // emit collapsed call
        back() {
            this.$root.$emit('collapse')
        }
    }
}
</script>