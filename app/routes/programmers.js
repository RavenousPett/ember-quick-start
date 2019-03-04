import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Rich P', 'Mae Jemison', 'Albert Hofmann'];
    }
});
