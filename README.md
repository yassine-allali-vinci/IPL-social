# IPL-social


Nom : ALLALI    
Prénom : Yassine
Email: yassine.allali@student.vinci.be

URL Github : https://github.com/yassine-allali-vinci/IPL-social.git


 publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}
