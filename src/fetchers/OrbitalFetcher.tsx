class OrbitalFetcher {


    /*
        I don't know if this class has any purpose!
        :D
        We will figure this out later
    */





    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }


    async getOrbitals() {
        // Fetch if localStorage is nulled
        if (localStorage.getItem('orbitals-time') === null) {
            const results = await this.fetchOrbitals
            localStorage.setItem('orbitals', JSON.stringify(results));
            localStorage.setItem('orbitals-time', `${new Date()}`)
            return results;
        }

        // Get from storage if last fetch was recent
        if (new Date(localStorage.getItem('orbitals-time') as string).getTime() < 1000 * 60 * 60) {
            return localStorage.getItem('orbitals');
        }

        // Just fetch and store
        const results = await this.fetchOrbitals();
        localStorage.setItem('orbitals', JSON.stringify(results));
        localStorage.setItem('orbitals-time', `${new Date()}`)
        return results;
    }


    private async fetchOrbitals() {

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

export default OrbitalFetcher;