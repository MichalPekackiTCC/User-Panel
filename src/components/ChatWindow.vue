<template>
<b-row>
    <b-card>
        <!-- test chat window to display chat information -->
        <p>{{ chat }}</p>
    </b-card>
</b-row>
</template>

<script>
export default {
    name: 'ChatWindow',
    props: {
        chat: []
    }
}
</script>