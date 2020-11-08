<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
                <th>Pantone Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Fuchsia Rose</td>
                <td>2001</td>
                <td>17-2031</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    name: "Table",
    async beforeMount() {
        await axios.get('https://reqres.in/api/unknown')
        .then(res => console.log(res.data))
        .catch(err => console(err.response))
    }
    
}
</script>

<style lang="scss" scoped>
    table {
        border: 1px solid black;

        thead {
            border: 1px solid red;

            tr {
                border: 1px solid orange;
            }
        }
    }
</style>