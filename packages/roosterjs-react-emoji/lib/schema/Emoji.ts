import { EmojiDescriptionStringKey, EmojiKeywordStringKey } from 'roosterjs-react-emoji-resources';

interface Emoji {
    /**
     * Uniquely identifies an emoji. It is stored in hex string in lower case.
     * Examples:
     * single code point emoji: 1f60d
     * double code point emoji: 1f1fa_1f1f8
     */
    key: string;
    description?: EmojiDescriptionStringKey;
    /**
     * Unicode representation of the emoji, computable from the key
     */
    codePoint?: string;
    keywords?: EmojiKeywordStringKey;
    shortcut?: string;
}

export default Emoji;
