<template>
	<div id="app">
		<b-container fluid class="bv-example-row bv-example-row-flex-cols">
			<b-row>
				<!-- nav bar to be used to set user status -->
				<b-navbar small fixed type="dark" variant="info">
					<b-navbar-nav>
						<b-nav-item-dropdown no-caret id="my-nav-dropdown" text="Menu">
							<b-dropdown-item>In Office</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item>On Break</b-dropdown-item>
							<b-dropdown-item>In Meeting</b-dropdown-item>
							<b-dropdown-item>Troubleshooting</b-dropdown-item>
						</b-nav-item-dropdown>
						<b-nav-item active>{{ users[0].name }}</b-nav-item>
					</b-navbar-nav>
				</b-navbar>
			</b-row>
			<b-row align-v="stretch">
				<!-- user panels -->
				<b-col v-if="collapsed" cols="1">
					<CollapsedPanel :members="chats[active_chat].members"/>
				</b-col>
				<b-col v-else cols="3">
					<UserPanel :members="chats[active_chat].members"/>
				</b-col>

				<!-- Chat windows -->
				<b-col :cols="collapsed ? '8' : '6'">
					<b-row style="height: 80vh;">
						<ChatWindow :chat="chats[active_chat]"/>
					</b-row>
					<b-row style="height: 10vh;">
						<b-row>
							<b-card>
								<p>message</p>
							</b-card>
						</b-row>
					</b-row>
				</b-col>
				<b-col cols="3">
					<span v-for="(chat, index) in chats" :key="chat.chat_id">
						<b-row v-if="active_chat != index" @click="setActiveChat(index)" style="height: 30vh;">
							<ChatWindow :chat="chat"/>
						</b-row>
					</span>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import UserPanel from './components/UserPanel.vue'
import ChatWindow from './components/ChatWindow.vue'
import CollapsedPanel from './components/CollapsedPanel.vue'
import users from "@/store/users";
import chats from "@/store/chats";

export default {
	name: 'App',
	components: {
		UserPanel,
		CollapsedPanel,
		ChatWindow
	},
	data () {
		return {
			collapsed: false,
			active_chat: 0,
		}
    },
	computed:{
		users,
		chats
	},
	mounted() {
		// collapsed status listener
        this.$root.$on('collapse', () => {
            this.collapsed = !this.collapsed
        })
    },
	methods: {
		// selecting active chat updates user panel
		setActiveChat(i) {
			this.active_chat = i;
		}
	}
}
</script>
