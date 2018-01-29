import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerSyle,
        headertextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection> 
                <View style={thumbnailContainerSyle}>
                    <Image
                      style={thumbnailStyle} 
                      source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headertextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image 
                  style={imageStyle}
                  source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                  Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headertextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerSyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
