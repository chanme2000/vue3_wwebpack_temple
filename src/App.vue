<template>
  <h1
    :style="styleColor"
    @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit">
      <a href="#">
        {{ fruit }}
      </a>
    </Fruit>
  </ul>
</template>

<script>
import Fruit from './components/Fruit';
  export default {
    components : {
      Fruit
    },
    data() {
      return {
        count : 0,
        fruits : [
          'Apple', 'Banana', 'Cherry'
        ],
        styleColor : {
          fontSize : '32px',
          color : 'royalblue',
          userSelect : 'none'
        }
      }
    },
    methods: {
      increase() {
        this.count += 1
      }
    }
  }
</script>
