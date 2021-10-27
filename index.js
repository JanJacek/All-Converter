new Vue({
    el: '#app',
    data: {
        h1:'All Converter 0.1'
    }
}),
new Vue({
    el: '#app2',
    delimiters: ['${', '}'], // Avoid Twig conflicts
    data: {
      filelist: [] // Store our uploaded files
    },
    methods: {
      onChange() {
        this.filelist = [...this.$refs.file.files];
        console.log(this.filelist);
      },
      remove(i) {
        this.filelist.splice(i, 1);
      },
      dragover(event) {
        event.preventDefault();
        // Add some visual fluff to show the user can drop its files
        if (!event.currentTarget.classList.contains('bg-green-300')) {
          event.currentTarget.classList.remove('bg-gray-100');
          event.currentTarget.classList.add('bg-green-300');
        }
      },
      dragleave(event) {
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
      },
      drop(event) {
        event.preventDefault();
        this.$refs.file.files = event.dataTransfer.files;
        this.onChange(); // Trigger the onChange event manually
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
      }
    }
  });