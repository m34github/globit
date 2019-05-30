import React from 'react';
import {
  Button,
  Footer,
  FooterTab,
  Icon,
  Text,
  View
} from 'native-base';

class GlobalFooter extends React.Component {
  render() {
    return (
      <View>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon type="MaterialIcons" name="description" />
              <Text>News</Text>
            </Button>
            <Button vertical>
              <Icon type="MaterialCommunityIcons" name="tag-multiple" />
              <Text>Words</Text>
            </Button>
            <Button vertical>
              <Icon type="MaterialIcons" name="bookmark" />
              <Text>Bookmark</Text>
            </Button>
            <Button vertical>
              <Icon type="MaterialIcons" name="more-vert" />
              <Text>Misc.</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default GlobalFooter;
