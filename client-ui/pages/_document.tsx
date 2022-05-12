import {ColorModeScript} from '@chakra-ui/react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import theme from 'theme';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}: {renderPage: any}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          {/* @ts-ignore */}
          {this.props.styleTags}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
