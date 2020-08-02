class ImageFetcher {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }


    async getImages() {
        // Fetch if localStorage is nulled
        if (localStorage.getItem('images-time') === null) {
            const results = await this.fetchImages
            localStorage.setItem('images', JSON.stringify(results));
            localStorage.setItem('images-time', `${new Date()}`)
            return results;
        }

        // Get from storage if last fetch was recent
        if (new Date(localStorage.getItem('images-time') as string).getTime() < 1000 * 60 * 60) {
            return localStorage.getItem('images');
        }

        // Just fetch and store
        const results = await this.fetchImages();
        localStorage.setItem('images', JSON.stringify(results));
        localStorage.setItem('images-time', `${new Date()}`)
        return results;
    }


    private async fetchImages() {
        const today = this.formatDate(new Date());

        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&api_key=${this.apiKey}&camera=NAVCAM`;

        const response = await fetch(url);
        const json = await response.json();

    }

    private formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

}

export default ImageFetcher;