var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'TEST';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function(){
  vm1.title = 'Changed by timer';
  vm1.show();
}, 2000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance '
  },
  methods: {
    onChange: function(){
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>HELLO!!</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);